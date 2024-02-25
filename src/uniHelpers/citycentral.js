import idlFactory from "../uniHelpers/erc721.did";
// import utils from "../uniHelpers/utils.js";
// import { getAccountCredentials, to32bits, tokenIdentifier } from "../uniHelpers/crypto.js";
// import { Actor, ActorSubclass, HttpAgent, SignIdentity } from "@dfinity/agent";
// const { Principal } = require('@dfinity/principal')

// const identity = getAccountCredentials('words words .....', 0)
// const canisterId = '7mfck-baaaa-aaaah-acuqq-cai'
const canisterId = 'hmz4w-fiaaa-aaaah-admlq-cai'

// const getActorWithIdentity = (identity) => {
//     const defaultAgent = new HttpAgent({ host: 'https://boundary.ic0.app/', fetch })
//     const agent = new HttpAgent({
//       source: defaultAgent,
//       identity,
//     })

//     const actor = Actor.createActor(idlFactory, {
//         canisterId: canisterId,
//         agent,
//       })
//     return actor
// }

export var digisetteData = {
    attributes: [
      { trait_type: "ringType", value: "NEW DATA TEST" },
      { trait_type: "landRank", value: 0 },
      { trait_type: "rank", value: 0 },
      { trait_type: "powerUps", value: [0] },
      { trait_type: "progress", value: 0 },
      { trait_type: "xp", value: 0 },
      { trait_type: "category", value: "" },
      { trait_type: "linked", value: false },
      { trait_type: "identifier", value: "" },
      { trait_type: "alias", value: "" },
      { trait_type: "email", value: "" },
      { trait_type: "earthText", value: [""] },
      { trait_type: "styles", value: [""] },
      { trait_type: "discovered", value: [""] },
      { trait_type: "discoveredProgress", value: 0.0 },
      { trait_type: "power", value: 0 },
      { trait_type: "mental", value: 0 },
      { trait_type: "physical", value: 0 },
      { trait_type: "health", value: 0 },
      { trait_type: "speed", value: 0 },
      { trait_type: "sight", value: 0 },
      { trait_type: "endurance", value: 0.0 },
      { trait_type: "domains", value: [0] },
      { trait_type: "playerLocation", value: 0 },
      { trait_type: "soundLevel", value: 0.0 },
      { trait_type: "musicLevel", value: 0.0 },
      { trait_type: "fsOn", value: false },
      { trait_type: "notiOn", value: false },
      { trait_type: "networkClass", value: "" },
      { trait_type: "network", value: [""] },
      { trait_type: "landNumber", value: 0 },
      { 
        trait_type: "story", 
        value: {
          title: "",
          text: "",
          imagesUri: [""],
          videoUri: ""
        }
      },
      { trait_type: "bankooText", value: [""] },
      { trait_type: "imageCompData", value: [0] },
      { trait_type: "ancestorsNames", value: [""] },
      { trait_type: "ancestorsImages", value: [0] }
    ],
    name: "Digisette Pre-Alpha",
    description: "Limited edition pre-alpha 1 of 450 Digisette.",
    mimeType: "3dmodel",
    environmentImageThree: "https://yumi-frontend-assets.s3.ap-east-1.amazonaws.com/yumi/components/1658988744307_warehouse.hdr",
    url: "https://dje3s-2yaaa-aaaam-abhaq-cai.raw.icp0.io/file/0_original.glb",
    thumb: "https://dje3s-2yaaa-aaaam-abhaq-cai.raw.icp0.io/file/0_thumb.png"
  };
  

export async function getDigisette(di) {
    // Check which wallet is being used
    const plugActor = await window.ic.plug.createActor({
        canisterId: canisterId,
        interfaceFactory: idlFactory,
    });

    const custCheck = await plugActor.getTokensByIds(di).then((result) => {
        return result;
      }).catch((error) => {
        console.error("Error checking permission:", error);
    });

    return custCheck;
}

export async function updateMetadata(digIndex, metadata) {
    // Check which wallet is being used
    const plugActor = await window.ic.plug.createActor({
        canisterId: canisterId,
        interfaceFactory: idlFactory,
    });

    const jsonString = JSON.stringify(metadata);
    const encoder = new TextEncoder();
    const byteArray = encoder.encode(jsonString);   

    const formattedData = [[digIndex, [Array.from(byteArray)]]];

    const custCheck = await plugActor.updateMetadata(formattedData).then((result) => {
        return result;
      }).catch((error) => {
        console.error("Error checking permission:", error);
    });

    return custCheck;
}
