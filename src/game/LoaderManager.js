// import * as utils from "./utils.js";
// import * as BABYLON from "@babylonjs/core";
// import "@babylonjs/loaders/glTF";
// // import * as Hints from "./Hints.js";

// export default class LoaderManager {
//   constructor(sceneManager, gameManager) {
//     this.sceneManager = sceneManager;
//     this.scene = sceneManager.scene;
//     this.game = gameManager;
//     this.alphaMaterial = sceneManager.alphaMaterial;

//     this.assetsManager = new BABYLON.AssetsManager(this.scene);
//     this.assetsManager.useDefaultLoadingScreen = true;
//     this.assetsManager.show;
//     this.previousRoom = null;
//     this.roomBaseMent = null;
//     this.backGroundMusic = null;
//     this.fixedTimeAmount = 10;
//   }

//   initializeSceneAssets(onFinish) {
//     //first Load
//     // this.game.engine.displayLoadingUI();
//     BABYLON.SceneLoader.ImportMesh(
//       "",
//       "https://scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/3d/",
//       "test1.gltf",
//       this.scene,
//       () => {
//         // onSuccess
//         // let top_floor = this.scene.getMaterialByName("Top_FloorSurface_Color");
//         // top_floor.metallic = 0;
//         // top_floor.roughness = 0.3;
//         // top_floor.indexOfRefraction = 1;
//         // top_floor.environmentIntensity = 1;
//         // top_floor.bumpTexture.level = .2;
//         // glassMat.alpha = 0.85;
//         // glassMat.backFaceCulling = false;
//         // caseCover.transparencyMode = 2;

//         //Root
//         let root = this.scene.getMeshByName("__root__");

//         let curtainsMesh = this.scene.getMeshByName("Curtains");
//         curtainsMesh.visibility = 0.65;

//         // let doorMesh = this.scene.getMeshByName("door");
//         // doorMesh.visibility = 1;

//         let DeskMesh = this.scene.getMeshByName("Desk");
//         DeskMesh.visibility = 0.75;

//         //DeskMat
//         let Desk_mat = this.scene.getMaterialByName("Desk_mat");
//         Desk_mat.metallic = 0;
//         Desk_mat.roughness = 0.2;

//         //Computer_mat
//         let Computer_mat = this.scene.getMaterialByName("Computer_mat");
//         Computer_mat.metallic = 0.4;
//         Computer_mat.roughness = 0.5;
//         Computer_mat.emissiveColor = new BABYLON.Color3.FromHexString("575757");

//         let floorMat = this.scene.getMaterialByName("FloorA_mat");
//         floorMat.metallic = 0.55;
//         floorMat.roughness = 0.6;

//         // Penti
//         let Penti = this.scene.getMaterialByName("Default Fabric_FRONT_2451");
//         Penti.metallic = 0.4;
//         Penti.roughness = 1.0;

//         //Ground
//         let gorund = this.scene.getMeshByName("ground");
//         gorund.position.y = 0.013;
//         // gorund.tag = utils.groundTag;
//         gorund.material = this.alphaMaterial;
//         gorund.setEnabled(false);

//         //Pointer
//         this.sceneManager.pointer = this.scene.getNodeByName("Circle_Pointer");
//         this.sceneManager.pointer.getChildMeshes(false)[0].visibility = 0.5;
//         this.sceneManager.pointer.getChildMeshes(false)[0].isPickable = false;
//         this.sceneManager.pointer.getChildMeshes(false)[1].isPickable = false;

//         this.sceneManager.pointer.getChildMeshes(false)[0].visibility = 0.0;
//         this.sceneManager.pointer.getChildMeshes(false)[1].visibility = 0.0;

//         //Anim
//         this.sceneManager.animPointer =
//           this.sceneManager.pointer.clone("animPointer");
//         this.sceneManager.animPointer.position.y = -5;
//         this.sceneManager.pointer.isPickable = false;

//         this.sceneManager.animPointer.parent = root;
//         root.scaling = new BABYLON.Vector3(1, 1, -1);

//         this.createMirror();

//         //Get sceneMeshes (Actual meshes)
//         let sceneMeshes = [];
//         for (let i = 0; i < utils.interactiveMeshes.length; i++) {
//           let iteractObj = utils.interactiveMeshes[i];
//           let roomMesh = this.scene.getMeshByName(iteractObj.pickedMeshId);
//           if (roomMesh) {
//             if (iteractObj.pickedMeshId.includes("Holder")) {
//               roomMesh.material = this.alphaMaterial;
//               // roomMesh.visibility = 0.01;
//             }
//             sceneMeshes.push(roomMesh);
//             for (let j = 0; j < iteractObj.highlightIds.length; j++) {
//               let roomSubMesh =
//                 iteractObj.highlightIds[j] === iteractObj.pickedMeshId
//                   ? roomMesh
//                   : this.scene.getMeshByName(iteractObj.highlightIds[j]);
//               if (roomSubMesh) {
//                 sceneMeshes.push(roomSubMesh);
//               } else {
//                 console.log(
//                   "WARRING CAN'T FIND THIS SUB MESH",
//                   iteractObj.highlightIds[j]
//                 );
//               }
//             }
//             if (iteractObj.attachedIds) {
//               //If Attached
//               for (let k = 0; k < iteractObj.attachedIds.length; k++) {
//                 let attachedMesh =
//                   iteractObj.attachedIds[k] === iteractObj.pickedMeshId
//                     ? roomMesh
//                     : this.scene.getMeshByName(iteractObj.attachedIds[k]);
//                 if (attachedMesh) {
//                   sceneMeshes.push(attachedMesh);
//                 } else {
//                   console.log(
//                     "WARRING CAN'T FIND THIS SUB MESH",
//                     iteractObj.attachedIds[k]
//                   );
//                 }
//               }
//             }
//             if (iteractObj.linkedMeshesIds) {
//               //If linkedMeshesIds
//               for (let j = 0; j < iteractObj.linkedMeshesIds.length; j++) {
//                 let linkedMesh;

//                 linkedMesh = sceneMeshes.find(
//                   (mesh) => mesh.name === iteractObj.linkedMeshesIds[j].name
//                 );

//                 if (!linkedMesh)
//                   linkedMesh = this.scene.getMeshByName(
//                     iteractObj.linkedMeshesIds[j].name
//                   );

//                 if (linkedMesh) {
//                   if (linkedMesh.name.includes("Holder")) {
//                     linkedMesh.material = this.alphaMaterial;
//                     // roomMesh.visibility = 0.01;
//                   }
//                   sceneMeshes.push(linkedMesh);
//                 } else {
//                   console.log(
//                     "WARRING CAN'T FIND THIS SUB MESH",
//                     iteractObj.linkedMeshesIds[j].name
//                   );
//                 }
//               }
//             }
//           } else {
//             console.log(
//               "WARRING CAN'T FIND THIS MESH",
//               iteractObj.pickedMeshId
//             );
//           }
//         }
//         // console.log("RoomMeshes", sceneMeshes);

//         //Set InterActiveMeshes.
//         let roomMeshes = [];
//         for (let i = 0; i < utils.interactiveMeshes.length; i++) {
//           let iteractObj = utils.interactiveMeshes[i];
//           let targetPickedMesh = sceneMeshes.find(
//             (mesh) => mesh.name === iteractObj.pickedMeshId
//           );
//           if (targetPickedMesh) {
//             //PickedMesh Found
//             //Assgin Mesh TAG
//             targetPickedMesh.tag = iteractObj.id;
//             //Create Room OBJ
//             let roomObj = {};
//             roomObj.id = iteractObj.id; //assign ID
//             roomObj.pickedMesh = targetPickedMesh; //assign pickedMesh
//             roomObj.highlights = [];
//             for (let j = 0; j < iteractObj.highlightIds.length; j++) {
//               //assign Highlight Meshes
//               let highlightMesh = sceneMeshes.find(
//                 (mesh) => mesh.name === iteractObj.highlightIds[j]
//               );
//               if (highlightMesh) {
//                 roomObj.highlights.push(highlightMesh);
//               } else {
//                 console.log(
//                   "WARRING 2 CAN'T FIND THIS MESH",
//                   iteractObj.highlightIds[j]
//                 );
//               }
//             }
//             if (iteractObj.attachedIds) {
//               roomObj.attachedMesh = [];
//               for (let k = 0; k < iteractObj.attachedIds.length; k++) {
//                 //assign Highlight Meshes
//                 let attachedMesh = sceneMeshes.find(
//                   (mesh) => mesh.name === iteractObj.attachedIds[k]
//                 );
//                 if (attachedMesh) {
//                   roomObj.attachedMesh.push(attachedMesh);
//                 } else {
//                   console.log(
//                     "WARRING 2 CAN'T FIND THIS MESH",
//                     iteractObj.attachedIds[k]
//                   );
//                 }
//               }
//             }
//             if (iteractObj.linkedMeshesIds) {
//               roomObj.linkedMeshes = [];
//               for (let j = 0; j < iteractObj.linkedMeshesIds.length; j++) {
//                 //assign Highlight Meshes
//                 let linkedMesh = sceneMeshes.find(
//                   (mesh) => mesh.name === iteractObj.linkedMeshesIds[j].name
//                 );
//                 if (linkedMesh) {
//                   linkedMesh.tag = iteractObj.linkedMeshesIds[j].tag;
//                   linkedMesh.isPickable = false;
//                   roomObj.linkedMeshes.push(linkedMesh);
//                 } else {
//                   console.log(
//                     "WARRING 2 CAN'T FIND THIS MESH",
//                     iteractObj.linkedMeshesIds[j].name
//                   );
//                 }
//               }
//             }
//             roomObj.actionType = iteractObj.actionType; //assign actionType
//             roomObj.targetAction = iteractObj.targetAction; //assign targetAction
//             roomMeshes.push(roomObj);
//           } else {
//             //PickedMesh Not Found
//             console.log(
//               "WARRING 2 CAN'T FIND THIS MESH",
//               iteractObj.pickedMesh
//             );
//           }
//         }

//         ///
//         this.game.engine.hideLoadingUI();
//         onFinish(roomMeshes);
//       },
//       (evt) => {
//         // onProgress - Progress Bar Loading
//         var loadedPercent = 0;
//         var loadingP = document.getElementById("newGameBut");
//         loadingP.setAttribute("onclick", "");
//         document.getElementById("renderCanvas").style.transition = "10s all";
//         if (evt.lengthComputable) {
//           loadedPercent = ((evt.loaded * 100) / evt.total).toFixed();
//         } else {
//           var dlCount = evt.loaded / (1210 * 1210);
//           loadedPercent = Math.floor((dlCount * 100.0) / 100);
//         }
//         document.getElementById(
//           "newGameBut"
//         ).innerHTML = `LOADING.. ${loadedPercent}%`;
//         if (loadedPercent >= 100) {
//           document.getElementById("newGameBut").innerHTML = `ENTER`;
//           loadingP.setAttribute("onclick", "activateInfinite();");
//         }
//       }
//     );
//     // Start loading
//     // this.assetsManager.load();
//   }
//   createMirror() {
//     // let glass = this.scene.getMeshByName("Mirror");

//     // var glass = new BABYLON.MeshBuilder.CreatePlane(
//     //   "Mirror1",
//     //   { width: 1.1, height: 2.82 },
//     //   this.scene
//     // );
//     // glass.rotation.y = Math.PI / 2;
//     // glass.position = new BABYLON.Vector3(5.1, 1.43, -0.89);
//     // // glass.isPickable = false;

//     // var glassMat = new BABYLON.StandardMaterial("skyBox", this.scene);

//     // glassMat.reflectionTexture = new BABYLON.CubeTexture(
//     //   "./room/room",
//     //   this.scene
//     // );
//     // glassMat.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
//     // glass.material = glassMat;

//     // this.renderTarget = new BABYLON.RenderTargetTexture(
//     //   "depth",
//     //   1024,
//     //   this.scene,
//     //   true
//     // );
//     // this.scene.customRenderTargets.push(this.renderTarget);

//     // console.log("this.scene.meshes", this.scene.meshes);
//     // console.log("this.scene.meshes 0", this.scene.meshes.length);

//     let blockList = [
//       "Base",
//       "Dlfa_L",
//       "Dlfa_L",
//       "Mirror",
//       "Wardrobe_Holder",
//       "WALL_B",
//       "Bag",
//       "Blouze",
//       "cloth01",
//       "cloth02",
//       "cloth03",
//       "cloth04",
//       "Hang_wood01",
//       "Hang_wood02",
//       "Hang_wood03",
//       "Hanger",
//       "Jacket",
//       "decor03",
//       "D01",
//       "D02",
//       "decor03",
//       "decor03",
//       "PentiMeta",
//     ];

//     // this is the plane that will show the RTT.
//     var plane = new BABYLON.MeshBuilder.CreatePlane(
//       "Mirror1",
//       { width: 1.1, height: 2.82 },
//       this.scene
//     );
//     plane.rotation.y = Math.PI / 2;
//     plane.position = new BABYLON.Vector3(5.1, 1.43, -0.89);

//     plane.computeWorldMatrix(true);
//     var glass_worldMatrix = plane.getWorldMatrix();

//     //Obtain normals for plane and assign one of them as the normal
//     var glass_vertexData = plane.getVerticesData("normal");
//     var glassNormal = new BABYLON.Vector3(
//       glass_vertexData[0],
//       glass_vertexData[1],
//       glass_vertexData[2]
//     );
//     //Use worldMatrix to transform normal into its current value
//     glassNormal = new BABYLON.Vector3.TransformNormal(
//       glassNormal,
//       glass_worldMatrix
//     );

//     //Create reflecting surface for mirror surface
//     var reflector = new BABYLON.Plane.FromPositionAndNormal(
//       plane.position,
//       glassNormal.scale(-1)
//     );

//     //Create the mirror material
//     var mirrorMaterial = new BABYLON.StandardMaterial("mirror", this.scene);
//     mirrorMaterial.reflectionTexture = new BABYLON.MirrorTexture(
//       "mirror",
//       1024,
//       this.scene,
//       true
//     );
//     mirrorMaterial.reflectionTexture.mirrorPlane = reflector;
//     this.scene.meshes.forEach((mesh) => {
//       if (!blockList.includes(mesh.name))
//         mirrorMaterial.reflectionTexture.renderList.push(mesh);
//       // this.renderTarget.renderList.push(mesh);
//     });
//     mirrorMaterial.reflectionTexture.level = 1;
//     plane.material = mirrorMaterial;
//   }
// }
