import { Actor, HttpAgent } from "@dfinity/agent";

// Imports and re-exports candid interface
import { idlFactory } from './universe_backend.did.js';
export { idlFactory } from './universe_backend.did.js';
// CANISTER_ID is replaced by webpack based on node environment
// export const canisterId = process.env.UNIVERSE_BACKEND_CANISTER_ID;
// Must Change to VITE ENV not Webpack.
export const canisterId = import.meta.env.VITE_universe_backend_canister_Id;

/**
 * 
 * @param {string | import("@dfinity/principal").Principal} canisterId Canister ID of Agent
 * @param {{agentOptions?: import("@dfinity/agent").HttpAgentOptions; actorOptions?: import("@dfinity/agent").ActorConfig}} [options]
 * @return {import("@dfinity/agent").ActorSubclass<import("./universe_backend.did.js")._SERVICE>}
 */
 export const createActor = (canisterId, options) => {
  const agent = new HttpAgent({ ...options?.agentOptions });
  
  // Fetch root key for certificate validation during development
  if(process.env.NODE_ENV !== "production") {
    agent.fetchRootKey().catch(err=>{
      console.warn("Unable to fetch root key. Check to ensure that your local replica is running");
      console.error(err);
    });
  }

  // Creates an actor with using the candid interface and the HttpAgent
  return Actor.createActor(idlFactory, {
    agent,
    canisterId,
    ...options?.actorOptions,
  });
};
  
/**
 * A ready-to-use agent for the universe_backend canister
 * @type {import("@dfinity/agent").ActorSubclass<import("./universe_backend.did.js")._SERVICE>}
 */
 export const universe_backend = createActor(canisterId);
