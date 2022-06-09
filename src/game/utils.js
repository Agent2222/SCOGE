//
import * as BABYLON from "@babylonjs/core";

export const HoverColor = new BABYLON.Color3(1, 1, 1);
// export const HoverColor = new BABYLON.Color3.White()
export const CameraHeight = 1.75;
export const environmentIntensity = 1.2;

export const groundTag = "Ground";

export const videoList = [
  "https://scoge.s3.us-east-2.amazonaws.com/3d/films/Sure-Ill-Tell-You.mp4",
  "https://scoge.s3.us-east-2.amazonaws.com/3d/films/S-21-1.mp4",
  "https://scoge.s3.us-east-2.amazonaws.com/3d/films/shades-tan.mp4",
];

export const audioList = [
  "https://scoge.s3.us-east-2.amazonaws.com/3d/Sounds/iaym_rev.mp3",
  "https://scoge.s3.us-east-2.amazonaws.com/3d/Sounds/scoge-radio-1.mp3",
];

export const compList = [
  "https://scoge.s3.us-east-2.amazonaws.com/3d/video/loadingscreen-comp.mp4",
];

export const ddVideo = [
  "https://scoge.s3.us-east-2.amazonaws.com/3d/video/audioscreen_2.mp4",
];

export const actionTypes = {
  movement: "movement",
  videoEvent: "videoEvent",
  audioEvent: "audioEvent",
};

export const meshesTags = {
  sofa: "Sofa",
  tv: "Tv",
  smallTable: "SmallTable",
  desk: "Desk",
  dresser: "Dresser",
  mirror: "Mirror1",
  digitalDisplay: "AudioSet",
  draftingTable: "draftingTable",
  carpet: "carpet",
  readingChair: "readingChair",
  magazine: "magazine",
  sketches: "sketches",
  exit: "Exit",
  pc: "PC",
  imageBook: "2222",
};

export const interactiveMeshes = [
  {
    id: meshesTags.exit,
    pickedMeshId: "Exit_Holder",
    highlightIds: ["Exit_Holder"],
    actionType: actionTypes.videoEvent,
  },
  {
    id: meshesTags.sofa,
    pickedMeshId: "Sofa",
    highlightIds: ["Sofa"],
    actionType: actionTypes.movement,
    targetAction: {
      target: new BABYLON.Vector3(-5.526, 1.844, 1.934),
      position: new BABYLON.Vector3(0.465, 1.35, 1.473),
      rotation: new BABYLON.Vector3(-0.082, -1.494, 0.0),
    },
  },
  {
    id: meshesTags.tv,
    pickedMeshId: "TV_Holder",
    highlightIds: ["TV_SCREEN"],
    attachedIds: ["TV_SCREEN"],
    actionType: actionTypes.videoEvent,
  },
  {
    id: meshesTags.readingChair,
    pickedMeshId: "ReadingChair",
    highlightIds: ["ReadingChair"],
    linkedMeshesIds: [
      //which should be active in it's case
      { name: "Magazine", tag: meshesTags.magazine },
    ],
    actionType: actionTypes.movement,
    targetAction: {
      target: new BABYLON.Vector3(0.624, -1.328, 2.304),
      position: new BABYLON.Vector3(4.174, 1.5, 1.183),
      rotation: new BABYLON.Vector3(0.65, -1.265, 0.0),
    },
  },
  {
    id: meshesTags.smallTable,
    pickedMeshId: "ReadingTable", //picked
    highlightIds: ["ReadingTable"], //which should highlighted
    linkedMeshesIds: [
      //which should be active in it's case
      { name: "Magazine", tag: meshesTags.magazine },
    ],
    actionType: actionTypes.movement,
    targetAction: {
      target: new BABYLON.Vector3(0.624, -1.328, 2.304),
      position: new BABYLON.Vector3(4.174, 1.5, 1.183),
      rotation: new BABYLON.Vector3(0.65, -1.265, 0.0),
    },
  },
  {
    id: meshesTags.desk,
    pickedMeshId: "Desk",
    highlightIds: ["Desk"],
    actionType: actionTypes.movement,
    targetAction: {
      target: new BABYLON.Vector3(3.274, 0.007, 2.45),
      position: new BABYLON.Vector3(2.2, 1.198, -1.792),
      rotation: new BABYLON.Vector3(0.273, 0.066, 0.0),
    },
  },
  {
    id: meshesTags.dresser,
    pickedMeshId: "Wardrobe_Holder",
    highlightIds: ["Wardrobe_Holder"],
    attachedIds: ["Dlfa_L", "Dlfa_R"],
    actionType: actionTypes.movement,
    targetAction: {
      target: new BABYLON.Vector3(4.26, 1.623, -1.041),
      position: new BABYLON.Vector3(3.265, 1.626, -2.2),
      rotation: new BABYLON.Vector3(0.003, 1.601, 0.0),
    },
  },
  {
    id: meshesTags.imageBook,
    pickedMeshId: "2222",
    highlightIds: ["2222"],
    attachedIds: ["2222"],
    actionType: actionTypes.movement,
    targetAction: {
      target: new BABYLON.Vector3(9.28, 0.99, -3.78),
      position: new BABYLON.Vector3(3.5, 1.75, -3.7),
      rotation: new BABYLON.Vector3(0.003, 1.601, 0.0),
    },
  },
  {
    id: meshesTags.mirror,
    pickedMeshId: "Mirror1",
    highlightIds: ["Mirror1"],
    actionType: actionTypes.movement,
    targetAction: {
      target: new BABYLON.Vector3(5.865, 1.44, -0.872),
      position: new BABYLON.Vector3(3.7, 1.75, -0.816),
      rotation: new BABYLON.Vector3(0.121, 1.593, 0.0),
    },
  },
  {
    id: meshesTags.digitalDisplay,
    pickedMeshId: "AudioHolder",
    highlightIds: ["Speaker_01", "Speaker_02"],
    attachedIds: ["AudioScreen"],
    actionType: actionTypes.audioEvent,
    targetAction: {
      target: new BABYLON.Vector3(-4.574, -0.419, 0.278),
      position: new BABYLON.Vector3(-0.436, 1.75, 0.109),
      rotation: new BABYLON.Vector3(0.482, -1.53, 0.0),
    },
  },
  {
    id: meshesTags.pc,
    pickedMeshId: "CompHolder",
    attachedIds: ["PCscreen"],
    highlightIds: ["PCscreen"],
    actionType: actionTypes.videoEvent,
  },
  {
    id: meshesTags.draftingTable,
    pickedMeshId: "DraftTable",
    highlightIds: ["DraftTable"],
    linkedMeshesIds: [
      //which should be active in it's case
      { name: "Sketch_Holder", tag: meshesTags.sketches },
    ],
    actionType: actionTypes.movement,
    targetAction: {
      target: new BABYLON.Vector3(1.907, -1.057, -6.657),
      position: new BABYLON.Vector3(2.2, 1.568, -3.028),
      rotation: new BABYLON.Vector3(0.625, -3.061, 0.0),
    },
  },
  {
    id: meshesTags.carpet,
    pickedMeshId: "CircleRug",
    highlightIds: ["CircleRug"],
    actionType: actionTypes.movement,
    targetAction: {
      target: new BABYLON.Vector3(-0.435, 1.628, -1.184),
      position: new BABYLON.Vector3(-1.2, 1.75, -3.2),
      rotation: new BABYLON.Vector3(0.122, 0.606, 0.0),
    },
  },
];
