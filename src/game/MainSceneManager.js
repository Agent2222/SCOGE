import LoaderManager from "./LoaderManager.js";
import * as BABYLON from "@babylonjs/core";
import * as utils from "./utils.js";
import initNoti2 from "../index.js";

export default class MainSceneManager {
  constructor(gameManager) {
    this.game = gameManager;
    this.scene = null;
    this.MainCamera = null;
    this.HemiLight = null;
    this.isLocked = false;
    this.currentItemTag = utils.meshesTags.carpet;
    this.HideMeshes = [];
    this.InputMg = {};
    //Vid
    this.currentVideoIndex = 0;
    this.currentAudioIndex = 0;

    this.videoTextureList = [];
    this.DDVideoTextureList = [];
    this.compVideoTextureList = [];
    this.audioList = [];
    this.currentLocation = "";
  }
  createScene() {
    this.scene = new BABYLON.Scene(this.game.engine);
    this.scene.clearColor = new BABYLON.Color4(0, 0, 0, 1);
    this.scene.imageProcessingConfiguration.contrast = 1.2;
    this.scene.imageProcessingConfiguration.exposure = 1.0;
    this.scene.imageProcessingConfiguration.toneMappingEnabled = true;
    this.scene.imageProcessingConfiguration.toneMappingType = 1;
    this.scene.environmentIntensity = utils.environmentIntensity;

    //Create CubicTexture
    let skyboxCubecTexture = BABYLON.CubeTexture.CreateFromPrefilteredData(
      // "/public/environment/empty_warehouse_01_4k.env",
      // "models/Room44/empty_warehouse_01_4k.env",
      // "https://scoge.s3.us-east-2.amazonaws.com/3d/empty_warehouse_01_4k.env",
      "https://scoge.s3.us-east-2.amazonaws.com/3d/empty_warehouse_01_4k.env",
      // "https://playground.babylonjs.com/textures/environment.env",
      // "./environment/Panorama.env",
      this.scene
    );
    skyboxCubecTexture.gammaSpace = true;
    skyboxCubecTexture.level = 1;
    this.scene.environmentTexture = skyboxCubecTexture;

    this.scene.onPointerObservable.add((pointerInfo) => {
      switch (pointerInfo.type) {
        case BABYLON.PointerEventTypes.POINTERDOWN:
          // console.log("POINTER DOWN");
          this.onPointerDown(pointerInfo.event);
          break;
        case BABYLON.PointerEventTypes.POINTERUP:
          // console.log("POINTER UP");
          this.onPointerUp(pointerInfo.event);
          break;
        // Hover Outline
        // case BABYLON.PointerEventTypes.POINTERMOVE:
        //   this.onPointerMove(pointerInfo.event);
        //   break;
        case BABYLON.PointerEventTypes.POINTERDOUBLETAP:
          break;
        case BABYLON.PointerEventTypes.POINTERWHEEL:
          // this.MouseWheelHandler();
          break;
        default:
          break;
      }
    });

    this.scene.onPointerObservable.add((pointerInfo) => {
      switch (pointerInfo.type) {
        case BABYLON.PointerEventTypes.POINTERDOUBLETAP:
          break;
        default:
          break;
      }
    });

    this.createCamera();
    this.initializeEnvironMent();
    this.highLightManager = new BABYLON.HighlightLayer(
      "highLightManager",
      this.scene
    );
    this.gl = new BABYLON.GlowLayer("glow", this.scene);
    this.gl.customEmissiveColorSelector = function (
      mesh,
      subMesh,
      material,
      result
    ) {
      if (mesh.name === "Exit_Text") {
        result.set(255, 255, 255, 1);
      } else {
        result.set(0, 0, 0, 0);
      }
    };

    const onFinish = (roomObjects) => {
      //OnLoad !
      this.roomObjects = roomObjects;
      //setUpTv
      this.setUpTv();
      this.setUpAudios();
      this.setupComp();
    };

    //init LoadManager
    this.loaderManager = new LoaderManager(this, this.game);
    this.loaderManager.initializeSceneAssets(onFinish);

    // DEBUGER
    // this.scene.debugLayer.show();
    return this.scene;
  }
  pointerlockchange() {
    var controlEnabled =
      document.mozPointerLockElement ||
      document.webkitPointerLockElement ||
      document.msPointerLockElement ||
      document.pointerLockElement ||
      null;
    // If the user is already locked
    if (!controlEnabled) {
      //camera.detachControl(canvas);
      this.isLocked = false;
    } else {
      //camera.attachControl(canvas);
      this.isLocked = true;
    }
  }
  createCamera() {
    // this.IsMobile = this.isMobile();
    // console.log("is mobile", this.IsMobile);

    //Moving Camera
    this.MainCamera = new BABYLON.UniversalCamera(
      "UniversalCamera",
      new BABYLON.Vector3(1.35, 1.25, 1.75),
      this.scene
    );
    this.MainCamera.checkCollisions = true;
    this.MainCamera.attachControl(this.game.canvas, true);
    this.MainCamera.speed = 0.2;
    this.MainCamera.minZ = 0;
    this.MainCamera.fov = 1;
    this.MainCamera.inputs.removeByType("FreeCameraKeyboardMoveInput");

    // // //Controls  WASD
    // this.MainCamera.keysUp.push(87);
    // this.MainCamera.keysDown.push(83);
    // this.MainCamera.keysRight.push(68);
    // this.MainCamera.keysLeft.push(65);
    // this.MainCamera.setTarget(new BABYLON.Vector3(0.6, 6.2, -10));

    // this.MainCamera.position = new BABYLON.Vector3(-1.0,utils.CameraHeight,-2.0);

    this.MainCamera.position = new BABYLON.Vector3(-1.2, 1.75, -3.2);
    this.MainCamera.target = new BABYLON.Vector3(-0.435, 1.628, -1.184);
    this.MainCamera.rotation = new BABYLON.Vector3(0.122, 0.606, 0.0);

    this.MainCamera.ellipsoid = new BABYLON.Vector3(1, 1, 1);

    this.camBox = BABYLON.MeshBuilder.CreateBox(
      "CameraBox",
      { size: 2 },
      this.scene
    );
    this.camBox.position.y -= 2;
    this.camBox.parent = this.MainCamera;

    this.myRef = document.getElementById("renderCanvas");
  }
  initializeEnvironMent() {
    // this.HemiLight = new BABYLON.HemisphericLight(
    //   "HemiLight",
    //   new BABYLON.Vector3(0, 1, 0),
    //   this.scene
    // );
    // this.HemiLight.intensity = 1.8;
    // this.HemiLight.groundColor = new BABYLON.Color3(
    //   90 / 255,
    //   90 / 255,
    //   90 / 255
    // );

    // this.myBox = BABYLON.MeshBuilder.CreateBox(
    //   "MainBox",
    //   { size: 0.2 },
    //   this.scene
    // );

    //  PRODUCT TITLE
    this.meshTitle = "meshTitle";
    // PRODUCT 2nd LINE SubTiTLE
    this.meshSubTitle = "meshSubTitle";
    // PRODUCT CATEGORY
    this.meshprodCategory = "meshprodCategory";
    this.meshURL = "meshURL";

    this.alphaMaterial = new BABYLON.StandardMaterial("alphaMat", this.scene);
    this.alphaMaterial.alpha = 0;

    // var ground = BABYLON.MeshBuilder.CreateGround(
    //   "ground",
    //   { width: 250, height: 250 },
    //   this.scene
    // );
    // ground.checkCollisions = true;
    // ground.material = this.alphaMaterial;

    this.camBox.material = this.alphaMaterial;

    var pipeline = new BABYLON.DefaultRenderingPipeline(
      "defaultPipeline", // The name of the pipeline
      true, // Do you want the pipeline to use HDR texture?
      this.scene, // The scene instance
      [this.MainCamera] // The list of cameras to be attached to
    );
    pipeline.samples = 6;
    pipeline.fxaaEnabled = true;
  }

  //#region UserInput (Mouse)
  onPointerDown(ev) {
    // console.log("Mouse Down");
    if (ev.button !== 0) {
      return;
    }
    this.InputMg.grabing = true;
    var pickInfo = this.scene.pick(this.scene.pointerX, this.scene.pointerY); //, function (mesh) { return mesh !=ground });
    if (pickInfo.hit && pickInfo.pickedMesh.tag) {
      // let pickedPoint = pickInfo.pickedPoint.clone();
      if (pickInfo.pickedMesh.tag === utils.groundTag) {
        //ground
        this.InputMg.pickedPoint = pickInfo.pickedPoint.clone();
      } else {
        //interactive Item
        let pickedMesh = pickInfo.pickedMesh;
        if (this.InputMg.pickedMesh) {
          //Remove Highlight
          this.highLightManager.removeMesh(this.InputMg.pickedMesh);
        }
        setTimeout(() => {
          if (!this.InputMg.grabing) this.handleActionByTag(pickedMesh.tag); //ApplyActionByTag
        }, 200);
      }
    } else {
      //Just Grabing
      this.myRef.style.cursor = "grab";
    }
  }
  onPointerUp() {
    // console.log("Up Mouse");
    var pickInfo = this.scene.pick(this.scene.pointerX, this.scene.pointerY); //, function (mesh) { return mesh !=ground });
    if (pickInfo.hit && pickInfo.pickedMesh.tag === utils.groundTag) {
      console.log("ground !!");
      if (
        this.InputMg.pickedPoint &&
        this.InputMg.pickedPoint.equals(pickInfo.pickedPoint.clone())
      ) {
        this.InputMg.isMovLocked = true;
        if (this.currentItemTag === utils.meshesTags.dresser) {
          this.toggleItemVisiblity(this.HideMeshes, true);
        }
        this.currentItemTag = null;

        this.HandleMovingByPoint(pickInfo.pickedPoint.clone());
      } else {
        // Just Drag
        // console.log(" */  */ ");
      }
    }
    this.myRef.style.cursor = "crosshair";
    this.InputMg.pickedPoint = null;
    this.InputMg.grabing = false;
  }
  onPointerMove() {
    if (this.InputMg.grabing) {
      // console.log("dddddddddddd");
      this.myRef.style.cursor = "grab";
      return;
    }
    var pickInfo = this.scene.pick(
      this.scene.pointerX,
      this.scene.pointerY,
      (mesh) => mesh.tag
    );
    if (
      pickInfo.hit &&
      pickInfo.pickedMesh.isPickable &&
      pickInfo.pickedMesh.tag
    ) {
      // console.log("pickInfo.pickedMesh.tag", pickInfo.pickedMesh.tag)
      if (pickInfo.pickedMesh.tag === utils.groundTag) {
        //Ground
        if (this.InputMg.pickedMesh) {
          //Remove
          this.highLightManager.removeMesh(this.InputMg.pickedMesh);
        }
        if (this.pointer && !this.InputMg.isMovLocked) {
          if (
            this.InputMg.pickedPoint &&
            !this.InputMg.pickedPoint.equals(pickInfo.pickedPoint.clone())
          ) {
            console.log("drrafff");
            this.InputMg.grabing = true;
            this.pointer.position.y -= 5;
            return;
          } else {
            this.myRef.style.cursor = "pointer";
          }
          this.pointer.setAbsolutePosition(
            new BABYLON.Vector3(
              pickInfo.pickedPoint.x,
              pickInfo.pickedPoint.y,
              pickInfo.pickedPoint.z
            )
          );
        }
      } else if (
        pickInfo.pickedMesh.tag !== this.currentItemTag ||
        this.currentItemTag === utils.meshesTags.digitalDisplay
      ) {
        //Another Tag item and not the same Item
        this.myRef.style.cursor = "pointer";
        if (this.InputMg.pickedMesh) {
          //Remove Last Tag Obj
          this.highLightManager.removeMesh(this.InputMg.pickedMesh);
        }
        //Assign PickedMesh
        this.InputMg.pickedMesh = pickInfo.pickedMesh;
        this.highLightManager.addMesh(
          this.InputMg.pickedMesh,
          utils.HoverColor
        );
      }
    } else {
      //Pick Randomly -- or didn't pick
      if (this.InputMg.pickedMesh) {
        this.highLightManager.removeMesh(this.InputMg.pickedMesh);
      }
    }
  }
  //#endregion
  HandleMovingByPoint(newPickedPoint) {
    let position = new BABYLON.Vector3(
      newPickedPoint.x,
      utils.CameraHeight,
      newPickedPoint.z
    );

    this.animPointer.position = this.pointer.position;
    this.animPointer.scaling = BABYLON.Vector3.One();
    this.animPointer.visibility = 1;

    let dif = position.subtract(this.MainCamera.position);

    //Camera Animation
    //position
    var cameraPosAnim = new BABYLON.Animation(
      "cam_PosAnim",
      "position",
      120,
      BABYLON.Animation.ANIMATIONTYPE_VECTOR3,
      BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
    );
    var keyFrames = [];
    keyFrames.push({
      frame: 0,
      value: this.MainCamera.position,
    });
    keyFrames.push({
      frame: 70,
      value: dif
        .multiplyInPlace(new BABYLON.Vector3(0.8, 0.8, 0.8))
        .addInPlace(this.MainCamera.position),
    });
    keyFrames.push({
      frame: 100,
      value: position,
    });
    cameraPosAnim.setKeys(keyFrames);

    //Box Animations
    //Scale
    var boxScaleAnim = new BABYLON.Animation(
      "box_ScaleAnim",
      "scaling",
      120,
      BABYLON.Animation.ANIMATIONTYPE_VECTOR3,
      BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
    );
    keyFrames = [];
    keyFrames.push({
      frame: 0,
      value: this.animPointer.scaling,
    });
    keyFrames.push({
      frame: 50,
      value: this.animPointer.scaling.multiplyByFloats(2.5, 2.5, 2.5),
    });
    boxScaleAnim.setKeys(keyFrames);
    //Visibility
    var boxVisAnim = new BABYLON.Animation(
      "box_VisibilityAnim",
      "visibility",
      120,
      BABYLON.Animation.ANIMATIONTYPE_FLOAT,
      BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
    );
    keyFrames = [];
    keyFrames.push({
      frame: 0,
      value: 1,
    });
    keyFrames.push({
      frame: 50,
      value: 0,
    });
    boxVisAnim.setKeys(keyFrames);

    var movmentGroup = new BABYLON.AnimationGroup("MovmentGroupAnims");
    movmentGroup.addTargetedAnimation(cameraPosAnim, this.MainCamera);
    movmentGroup.addTargetedAnimation(boxScaleAnim, this.animPointer);
    movmentGroup.addTargetedAnimation(
      boxVisAnim,
      this.animPointer.getChildMeshes(false)[0]
    );
    movmentGroup.addTargetedAnimation(
      boxVisAnim,
      this.animPointer.getChildMeshes(false)[1]
    );
    movmentGroup.normalize(0, 100);

    movmentGroup.onAnimationEndObservable.add(() => {
      this.InputMg.isMovLocked = false;
    });
    movmentGroup.play(false);

    // this.scene.beginDirectAnimation(
    //   this.MainCamera,
    //   [cameraAnim],
    //   0,
    //   100,
    //   false,
    //   1,
    //   onAnimEnd
    // );
  }
  handleActionByTag(selectedTag) {
    // console.log("selectedTag |", selectedTag);

    if (
      selectedTag === this.currentItemTag &&
      this.currentItemTag !== utils.meshesTags.digitalDisplay
    )
      return; //sameItem
    if (this.currentItemTag === utils.meshesTags.dresser) {
      //dresserCase
      this.toggleItemVisiblity(this.HideMeshes, true);
    }
    this.controleLinkedMeshesState(this.currentItemTag, false);

    let roomObj = this.roomObjects.find(
      (roomObj) => roomObj.id === selectedTag
    );
    if (roomObj) {
      let actionMethod = null;
      const { targetAction, attachedMesh } = roomObj;
      switch (
        selectedTag //mainitems
      ) {
        case utils.meshesTags.sofa:
          console.log("OnClick Sofa Case", roomObj);
          actionMethod = () => {
            this.focusOnTarget(
              targetAction.target,
              targetAction.position,
              targetAction.rotation
            );
          };
          this.applyHoverAction(actionMethod);
          this.currentLocation = "sofa";
          break;
        case utils.meshesTags.tv:
          console.log("OnClick tv Case");
          this.playNextVideo();
          // attachedMesh[0].material = this.ANote0VideoMat;
          break;
        case utils.meshesTags.smallTable:
        case utils.meshesTags.readingChair:
          console.log("OnClick smallTable/readingChair Case");
          actionMethod = () => {
            this.focusOnTarget(
              targetAction.target,
              targetAction.position,
              targetAction.rotation
            );
          };
          this.applyHoverAction(actionMethod);
          break;
        case utils.meshesTags.carpet:
          console.log("OnClick Carpet Case");
          actionMethod = () => {
            this.focusOnTarget(
              targetAction.target,
              targetAction.position,
              targetAction.rotation
            );
          };
          this.currentLocation = "carpet";
          this.applyHoverAction(actionMethod);
          break;
        case utils.meshesTags.desk:
          console.log("OnClick desk Case");
          actionMethod = () => {
            this.focusOnTarget(
              targetAction.target,
              targetAction.position,
              targetAction.rotation
            );
          };
          this.currentLocation = "desk";
          this.applyHoverAction(actionMethod);
          break;
        case utils.meshesTags.dresser:
          console.log("OnClick dresser Case");
          actionMethod = () => {
            this.toggleItemVisiblity(attachedMesh);
            this.focusOnTarget(
              targetAction.target,
              targetAction.position,
              targetAction.rotation
            );
          };
          this.currentLocation = "dresser";
          this.applyHoverAction(actionMethod);
          break;
        case utils.meshesTags.imageBook:
          console.log("OnClick Image Book");
          actionMethod = () => {
            this.focusOnTarget(
              targetAction.target,
              targetAction.position,
              targetAction.rotation
            );
          };
          this.applyHoverAction(actionMethod);
          if (this.currentLocation != "bookshelf") {
            this.currentLocation = "bookshelf";
            return;
          }
          if (this.currentLocation === "bookshelf") {
            this.viewImageBook();
            return;
          }
          break;
        case utils.meshesTags.mirror:
          console.log("OnClick mirror Case");
          actionMethod = () => {
            this.focusOnTarget(
              targetAction.target,
              targetAction.position,
              targetAction.rotation
            );
          };
          initNoti2(utils.meshesTags.mirror);
          this.currentLocation = "mirror";
          this.applyHoverAction(actionMethod);
          break;
        case utils.meshesTags.digitalDisplay:
          console.log("OnClick digitalDisplay Case");
          actionMethod = () => {
            this.focusOnTarget(
              targetAction.target,
              targetAction.position,
              targetAction.rotation
            );
          };
          this.currentLocation = "musicplayer";
          this.applyHoverAction(actionMethod);
          this.playNextAudio();
          break;
        case utils.meshesTags.draftingTable:
          console.log("OnClick draftingTable Case");
          actionMethod = () => {
            this.focusOnTarget(
              targetAction.target,
              targetAction.position,
              targetAction.rotation
            );
          };
          this.currentLocation = "drafttable";
          this.applyHoverAction(actionMethod);
          break;
        case utils.meshesTags.magazine:
          console.log("OnClick magazine Case");
          this.currentLocation = "reading chair";
          break;
        case utils.meshesTags.exit:
          window.inUniverse = false;
          document.getElementById("renderCanvas").style.transition = "5s all";
          // document.getElementById("bankooMapCont").style.transition = "5s all";
          document.getElementById("renderCanvas").style.opacity = "0";
          document.getElementById("mainCont").style.visibility = "visible";
          document.getElementById("bankooMapCont").style.opacity = "1";
          document.getElementById("bankooMapCont").style.display = "grid";
          window.clearMainUi();
          for (let i = 0; i < this.audioList.length; i++) {
            this.audioList[i].stop();
          }
          for (let i = 0; i < this.videoTextureList.length; i++) {
            this.videoTextureList[i].video.muted = true;
          }
          break;
        case utils.meshesTags.pc:
          console.log("OnClick PC");
          initNoti2(utils.meshesTags.pc);
          break;
        default:
          console.log("Case With no TAG !!!");
          return;
      }
      this.controleLinkedMeshesState(selectedTag, true);
      if (selectedTag !== utils.meshesTags.tv)
        this.currentItemTag = selectedTag;
    } else {
      //sub Items
      switch (selectedTag) {
        case utils.meshesTags.magazine:
          console.log("OnClick magazine Case");
          this.viewMagazine();
          break;
        case utils.meshesTags.sketches:
          console.log("OnClick sketches Case");
          this.viewSketches();
          break;
        case utils.meshesTags.exit:
          document.getElementById("renderCanvas").style.display = "none";
          break;
        default:
          console.log("Case With no TAG !!!");
          return;
      }
    }
  }
  focusOnTarget(target, position, rotation) {
    this.MainCamera.target = target.clone();
    this.MainCamera.position = position.clone();
    this.MainCamera.rotation = rotation.clone();
  }
  applyHoverAction(actionMethod, onFinish) {
    this.hoverAnim(true, actionMethod());
    this.hoverAnim(false, onFinish);
  }
  toggleItemVisiblity(meshList, state) {
    if (!state) this.HideMeshes = meshList;
    else meshList = this.HideMeshes;
    for (let i = 0; i < meshList.length; i++) {
      meshList[i].setEnabled(state);
    }
  }
  hoverAnim(fadeIn, onFinish) {
    let start, end;
    if (fadeIn) {
      start = this.scene.environmentIntensity;
      end = 0;
    } else {
      start = 0;
      end = utils.environmentIntensity;
    }
    //Camera Animation
    //position
    var environmentIntensity = new BABYLON.Animation(
      "environmentIntensityAnim",
      "environmentIntensity",
      100,
      BABYLON.Animation.ANIMATIONTYPE_FLOAT,
      BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
    );
    var keyFrames = [];
    keyFrames.push({
      frame: 0,
      value: start,
    });
    keyFrames.push({
      frame: 100,
      value: end,
    });
    environmentIntensity.setKeys(keyFrames);

    //Apply Group
    var movmentGroup = new BABYLON.AnimationGroup("SceneAnimationGroup");
    movmentGroup.addTargetedAnimation(environmentIntensity, this.scene);
    movmentGroup.normalize(0, 100);
    movmentGroup.onAnimationEndObservable.add(() => {
      if (onFinish) onFinish();
    });
    movmentGroup.play(false);
  }
  //
  controleLinkedMeshesState(itemTag, state) {
    let targetRoomObj = this.roomObjects.find(
      (roomObj) => roomObj.id === itemTag
    );
    if (!targetRoomObj || !targetRoomObj.linkedMeshes) return;
    for (let i = 0; i < targetRoomObj.linkedMeshes.length; i++) {
      targetRoomObj.linkedMeshes[i].isPickable = state;
    }
  }
  //
  //
  setUpTv() {
    //Create videoTextures
    for (let i = 0; i < utils.videoList.length; i++) {
      var ANote0VideoVidTex = new BABYLON.VideoTexture(
        `videoTexture_${i}`,
        utils.videoList[i],
        this.scene
      );
      ANote0VideoVidTex.vScale = -2;
      this.videoTextureList.push(ANote0VideoVidTex);
    }
    //create tv material
    this.ANote0VideoMat = new BABYLON.StandardMaterial("TvMat", this.scene);
    this.ANote0VideoMat.roughness = 1;
    this.ANote0VideoMat.emissiveColor = new BABYLON.Color3.White();
    //tv plane
    let tvRoomObj = this.roomObjects.find(
      (roomObj) => roomObj.id === utils.meshesTags.tv
    );
    if (tvRoomObj) {
      let tvPlane = tvRoomObj.attachedMesh[0];
      tvPlane.material = this.ANote0VideoMat;

      //playFirstVideo
      var random = Math.floor(Math.random() * this.videoTextureList.length);
      this.ANote0VideoMat.diffuseTexture = this.videoTextureList[random];
      this.videoTextureList.forEach((selected) => {
        selected.video.muted = true;
      });
    }
  }
  playNextVideo() {
    // Mute and Pause All other videos
    //
    this.DDVideoTextureList[0].video.pause();
    if (this.currentVideoIndex === this.videoTextureList.length - 1) {
      this.currentVideoIndex = 0;
    } else {
      this.currentVideoIndex++;
    }
    for (let i = 0; i < this.videoTextureList.length; i++) {
      if (i != this.currentVideoIndex) {
        this.videoTextureList[i].video.muted = true;
      } else {
        this.videoTextureList[i].video.muted = false;
      }
    }
    this.ANote0VideoMat.diffuseTexture =
      this.videoTextureList[this.currentVideoIndex];
    this.ANote0VideoMat.diffuseTexture.video.currentTime = 0;
    for (let i = 0; i < this.audioList.length; i++) {
      this.audioList[i].stop();
    }
  }

  setUpAudios() {
    //Create Audios
    for (let i = 0; i < utils.audioList.length; i++) {
      var audio = new BABYLON.Sound(
        "scoge-radio-3",
        utils.audioList[i],
        this.scene,
        null,
        { loop: true, autoplay: false }
      );
      this.audioList.push(audio);
    }
    // SETUP AUDIO SCREEN
    //Create DDvideoTextures
    for (let i = 0; i < utils.ddVideo.length; i++) {
      var DDANote0VideoVidTex = new BABYLON.VideoTexture(
        `videoTexture_${i}`,
        utils.ddVideo[i],
        this.scene
      );
      DDANote0VideoVidTex.vScale = -2;
      this.DDVideoTextureList.push(DDANote0VideoVidTex);
    }
    //create DDScreen material
    this.DDANote0VideoMat = new BABYLON.StandardMaterial("DDMat", this.scene);
    this.DDANote0VideoMat.roughness = 1;
    this.DDANote0VideoMat.emissiveColor = new BABYLON.Color3.White();
    //DD plane
    let DDRoomObj = this.roomObjects.find(
      (roomObj) => roomObj.id === utils.meshesTags.digitalDisplay
    );
    if (DDRoomObj) {
      let DDPlane = DDRoomObj.attachedMesh[0];
      DDPlane.material = this.DDANote0VideoMat;

      //playFirstDDVideo
      this.DDANote0VideoMat.diffuseTexture = this.DDVideoTextureList[0];
      this.DDVideoTextureList[0].video.pause();
      this.videoTextureList.forEach((selected) => {
        selected.video.muted = true;
      });
    }
    // END SETUP AUDIO SCREEN
  }
  playNextAudio() {
    this.audioList[this.currentAudioIndex].stop();
    if (this.currentAudioIndex === this.videoTextureList.length - 2) {
      this.currentAudioIndex = 0;
    } else {
      this.currentAudioIndex++;
    }
    this.audioList[this.currentAudioIndex].play();
    this.DDVideoTextureList[0].video.play();
    for (let i = 0; i < this.videoTextureList.length; i++) {
      this.videoTextureList[i].video.muted = true;
    }
  }

  setupComp() {
    // SETUP CompSCREEN
    //Create COMPvideoTextures
    for (let i = 0; i < utils.compList.length; i++) {
      var CompANote0VideoVidTex = new BABYLON.VideoTexture(
        `videoTexture_${i}`,
        utils.compList[i],
        this.scene
      );
      CompANote0VideoVidTex.vScale = -1;
      this.compVideoTextureList.push(CompANote0VideoVidTex);
      console.log(this.compVideoTextureList);
    }
    //create COMPScreen material
    this.CompANote0VideoMat = new BABYLON.StandardMaterial(
      "Computer_mat",
      this.scene
    );
    this.CompANote0VideoMat.roughness = 1;
    this.CompANote0VideoMat.emissiveColor = new BABYLON.Color3.White();
    //COMP plane
    let CompRoomObj = this.roomObjects.find(
      (roomObj) => roomObj.id === utils.meshesTags.pc
    );
    if (CompRoomObj) {
      let CompPlane = CompRoomObj.attachedMesh[0];
      CompPlane.material = this.CompANote0VideoMat;

      //playCOMPVideo
      this.CompANote0VideoMat.diffuseTexture = this.compVideoTextureList[0];
      this.videoTextureList.forEach((selected) => {
        selected.video.muted = true;
      });
    }
    // END SETUP COMP SCREEN
  }

  // View Image Book
  viewImageBook() {
    initNoti2(utils.meshesTags.imageBook);
    var Book2222 = document.createElement("div");
    Book2222.setAttribute("id", "B2222");
    Book2222.setAttribute("class", "hud");
    Book2222.innerHTML = `<img id="bookleft" onclick="setupBook(this)" src="https://scoge.s3.us-east-2.amazonaws.com/3d/2222/locale1-e1-1.jpg" style="margin-left:20%;"><img id="bookright" onclick="setupBook(this)" src="https://scoge.s3.us-east-2.amazonaws.com/3d/2222/locale1-e1-2.jpg" style="margin-left:10%;">`;
    document.getElementById("main").appendChild(Book2222);
  }

  viewMagazine() {
    initNoti2(utils.meshesTags.magazine);
    var Book2222 = document.createElement("div");
    Book2222.setAttribute("id", "BMAG");
    Book2222.setAttribute("class", "hud");
    Book2222.innerHTML = `<img id="bookleft" onclick="setupMagazine()" src="https://scoge.s3.us-east-2.amazonaws.com/3d/magazine/scoge-mag-1.png">`;
    document.getElementById("main").appendChild(Book2222);
  }

  // View Sketches
  viewSketches() {
    // initNoti2(utils.meshesTags.sketches);
    var Book2222 = document.createElement("div");
    Book2222.setAttribute("id", "BSketch");
    Book2222.setAttribute("class", "hud");
    Book2222.innerHTML = `<img id="sketch1" class="sketches" src="https://scoge.s3.us-east-2.amazonaws.com/3d/sketches/sketch-1.jpg" style="transform: rotate(-20deg)"><img id="sketch2" class="sketches" src="https://scoge.s3.us-east-2.amazonaws.com/3d/sketches/sketch-2.jpg" style="transform: rotate(45deg)"><img id="sketch3" class="sketches" src="https://scoge.s3.us-east-2.amazonaws.com/3d/sketches/sketch-3.jpg" onclick="setupSketches()">`;
    document.getElementById("main").appendChild(Book2222);
  }

  //#region Utils
  // isMobile() {
  //   let a = navigator.userAgent || navigator.vendor || window.opera;
  //   return (
  //     /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
  //       a
  //     ) ||
  //     /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
  //       a.substr(0, 4)
  //     )
  //   );
  // }
  //#region
}
