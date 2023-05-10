import { CharacterData } from "../characters/characterData";
import { connectPlugWallet } from "../../wallets.js";

// Check for wallet Connection
// Check for Digisette
// Check for Progress
// Check for Domain Setup

export const scns = {
  Intro: [
    {
      name: "scene1",
      type: "dialogue",
      conditions: [
        // Check for wallet
        function () {
          // return Boolean(window.ic);
          return false;
        },
      ],
      characters: [
        {
          persona: function () {
            // Search for character with name "Alex" in chrData
            return CharacterData.CityCentral.find((c) => c.name === "Alex");
          },
          pns: {
            position: "absolute",
            left: "-5%",
            leftTo: "5%",
            right: "auto",
            rightTo: "auto",
            bottom: 0,
            bottomTo: "",
            top: "auto",
            topTo: "",
            zIndex: 1,
            zIndexTo: 1,
            width: "auto",
            widthTo: "auto",
            height: "85%",
            heightTo: "85%",
            speed: 50,
            speedTo: 50,
            blur: "0px",
            blurTo: "0px",
            brightness: "1",
            brightnessTo: "1",
          },
          element: {
            class: "chr-textElement",
            type: "div",
            backgroundColor: "rgba(0, 0, 0, 0.75)",
            padding: "10px 10px",
            borderRadius: "10px",
            width: "50%",
            height: "auto",
            left: "auto",
            right: "-20%",
            bottom: "auto",
            top: "-5%",
            zIndex: 2,
            position: "absolute",
            border: ".5px solid #ff002d",
            pointer: {
              position: "absolute",
              width: "80px",
              height: "80px",
              borderleft: "1px solid #ff002d",
              bottom: "-100px",
              left: "-40px",
              zIndex: -5,
              transform: "rotate(45deg)",
            },
          },
          actions: ["chat"],
        },
        //////*********
        // Character 2
        //////*********
        {
          persona: function () {
            // Search for character with name "Alex" in chrData
            return CharacterData.CityCentral.find((c) => c.name === "Destiny");
          },
          pns: {
            position: "absolute",
            left: "auto",
            right: "-5%",
            leftTo: "auto",
            rightTo: "30%",
            bottom: 0,
            top: "auto",
            zIndex: 0,
            width: "auto",
            height: "66%",
            speed: 50,
            blur: "4px",
            brightness: "0.4",
          },
          actions: [""],
        },
        // {
        //   persona: function () {
        //     // Search for character with name "Alex" in chrData
        //     return CharacterData.CityCentral.find((c) => c.name === "Alex");
        //   },
        //   pns: {
        //       position: "absolute",
        //       left: "-5%",
        //       right: "auto",
        //       leftTo: "35%",
        //       rightTo: "auto",
        //       bottom: 0,
        //       top: "auto",
        //       zIndex: "-1",
        //       width: "auto",
        //       height: "40%",
        //       speed: 50,
        //       blur: "5px",
        //       brightness: "0.3",
        //   },
        //   actions: [""]
        // },
      ],
      ////////////////////////
      // Scene 1 Elements
      ////////////////////////
      elements: [
        {
          id: "scn-Element1",
          type: "div",
          innerType: "img",
          width: "20%",
          height: "auto",
          left: "40%",
          top: "45%",
          zIndex: "1",
          position: "absolute",
          shadow: true,
          shadowEffect: "blur(50px)",
          src: "https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Universe/Elements/plugWallet.png",
          action: function () {
            console.log("Connect Wallet");
            return connectPlugWallet();
          },
        },
        {
          id: "scn-Element2",
          type: "div",
          second: true,
          innerType: "img",
          width: "20%",
          height: "auto",
          left: "65%",
          top: "45%",
          zIndex: "2",
          position: "absolute",
          shadow: true,
          shadowEffect: "blur(50px)",
          src: "https://storage.fleek-internal.com/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Universe/Elements/BFWallet.png",
          action: function () {
            // Connect Wallet
          },
        },
      ],
      bg: "rgba(0, 0, 0, 0.75)",
    },
    ////////////////////////
    // Scene 2
    ////////////////////////
    {
      name: "scene2",
      type: "dialogue",
      conditions: [
        // Check for wallet
        function () {
          return false;
        },
      ],
      characters: [
        {
          persona: function () {
            // Search for character with name "Alex" in chrData
            return CharacterData.CityCentral.find((c) => c.name === "Destiny");
          },
          pns: {
            position: "absolute",
            left: "auto",
            right: "30%",
            bottom: 0,
            top: "auto",
            leftTo: "auto",
            rightTo: "30%",
            zIndex: 0,
            width: "auto",
            height: "66%",
            speed: 50,
            blur: "0px",
            brightness: "1",
          },
          element: {
            class: "chr-textElement",
            type: "div",
            backgroundColor: "rgba(0, 0, 0, 0.75)",
            padding: "10px 10px",
            borderRadius: "10px",
            width: "350px",
            height: "auto",
            left: "auto",
            right: "-10%",
            bottom: "auto",
            top: "-5%",
            zIndex: 1,
            position: "absolute",
            border: ".5px solid #ff002d",
            pointer: {
              position: "absolute",
              width: "80px",
              height: "80px",
              borderleft: "1px solid #ff002d",
              bottom: "-100px",
              left: "-40px",
              zIndex: 1,
              transform: "rotate(45deg)",
            },
          },
          actions: ["chat"],
        },
      ],
      elements: [
        {
          id: "scn-Element1",
          type: "div",
          innerType: "img",
          width: "300px",
          height: "auto",
          left: "40%",
          top: "45%",
          zIndex: "1",
          position: "absolute",
          shadow: true,
          shadowEffect: "blur(50px)",
          src: "https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Universe/Elements/plugWallet.png",
          action: function () {
            return connectPlugWallet();
          },
        },
        {
          id: "scn-Element2",
          type: "div",
          second: true,
          innerType: "img",
          width: "300px",
          height: "auto",
          left: "65%",
          top: "45%",
          zIndex: "2",
          position: "absolute",
          shadow: true,
          shadowEffect: "blur(50px)",
          src: "https://storage.fleek-internal.com/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Universe/Elements/BFWallet.png",
          action: function () {
            // Connect Wallet
          },
        },
      ],
      bg: "rgba(0, 0, 0, 0.75)",
    },
  ],
};
