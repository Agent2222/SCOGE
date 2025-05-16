import { idlFactory } from "../declarations/socket/socket.did.js";
import { IDL } from "@dfinity/candid";
import { Actor, HttpAgent } from "@dfinity/agent";
import { Principal } from "@dfinity/principal";
import IcWebSocket, {
  generateRandomIdentity,
  createWsConfig,
} from "ic-websocket-js";

export class ICWebSocketManager {
  constructor(url) {
    this.url = url;
    this.socket = null;
    this.eventHandlers = {};
    this.actor = null;
    this.messagesCount = 0;
    this.isClosed = false;
    this.isDemoEnded = false;
    this.mainCanisterId = "n2ddv-maaaa-aaaag-at6ea-cai";
    this.canisterId = "be2us-64aaa-aaaaa-qaabq-cai"; // Set canister ID
    this.initActor();
    this.idl = null;
  }

  async initActor() {
    this.live = "https://ic0.app";
    this.local = "http://127.0.0.1:4943/?canisterId=be2us-64aaa-aaaaa-qaabq-cai";
    this.defaultGateways = [
      ["wss:// gateway.icws.io", "AWS Gateway"],
      ["wss:// icwebsocketgateway.app.runonflux.io", "Flux Gateway"], 
      ["wss:// akash-gateway.icws.io", "Akash Gateway (Experimental)"],
    ];
    this.icUrl = "https://icp0.io";

    // Modify gateway selection logic
    if (
      window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1"
    ) {
      this.selectedGateway = [
        `ws://localhost:8080` // Fallback to local port path
      ];
    } else if (queryParamGw) {
      this.selectedGateway = [queryParamGw, "Custom Gateway"];
    } else {
      this.selectedGateway = ["ws://localhost:8080"];
    }

    this.idl = idlFactory;
    console.log("idlFactory:", this.idl);

    this.agent = HttpAgent.createSync({ host: this.local });
    this.actor = Actor.createActor(idlFactory, {
      agent: this.agent,
      canisterId: this.canisterId,
    });
    this.agent.fetchRootKey();

    // Add event listener for gateway parameter changes
    window.addEventListener("queryParam", (e) => {
      if (e.key === "gw") {
        this.selectedGateway = e.value.split("=")[1] || "";
      }
    });

    let queryParamGw = new URL(window.location.href).searchParams.get("gw");

    console.log("selectedGateway:", this.selectedGateway);
    console.log("queryParamGw:", queryParamGw);

    const wsConfig = createWsConfig({
      canisterId: this.canisterId,
      canisterActor: this.actor,
      identity: generateRandomIdentity(),
      networkUrl: this.local,
    });

    this.socket = new IcWebSocket(
      this.selectedGateway[0], 
      undefined, 
      wsConfig
    ); 

    console.log("Csocket:", this.socket);
    console.log("readyState:", this.socket.readyState);

    this.socket.onopen = () => {
      console.log("WebSocket opened");
      this.handleEvent("open");

      // UI Update: Indicate WebSocket is open and provide a close button
    };

    this.socket.onmessage = (event) => {
      if (this.isClosed) return;

      console.log("Received:", event.data);
      this.handleEvent("message", event.data);

      this.messagesCount += 1;
      if (this.messagesCount === 50) {
        this.isDemoEnded = true;
        this.socket.close();
        console.log("Demo ended after 50 messages.");
        return;
      }

      setTimeout(() => {
        if (this.isClosed) return;

        const messageToSend = { text: "pong", timestamp: BigInt(Date.now()) };

        try {
          this.socket.send(messageToSend);
          this.handleEvent("sent", messageToSend);
        } catch (error) {
          console.error("Error sending message:", error);
          this.displayErrorMessage(error);
        }
      }, 1000);
    };

    this.socket.onclose = () => {
      this.handleEvent("close");

      // UI Update: Indicate WebSocket is closed and provide a restart option
    };

    this.socket.onerror = (event) => {
      console.error("WebSocket error:", event);
      this.handleEvent("error", event);
      this.displayErrorMessage("WebSocket Error");
    };
  }

  handleEvent(eventType, event) {
    if (this.eventHandlers[eventType]) {
      this.eventHandlers[eventType].forEach((handler) => handler(event));
    }
  }

  on(eventType, handler) {
    if (!this.eventHandlers[eventType]) {
      this.eventHandlers[eventType] = [];
    }
    this.eventHandlers[eventType].push(handler);
  }

  send(message) {
    this.socket.send(JSON.stringify(message));
  }

  close() {
    this.socket.close();
    this.isClosed = true;
  }

  displayErrorMessage(error) {
    // UI Update: Display error message
  }
}
