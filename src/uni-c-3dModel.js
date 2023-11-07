import * as BABYLON from 'babylonjs';
import 'babylonjs-loaders';

class uni3dViewer extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
    }

    get active() {
        return this.getAttr('active');
    }

    set active(val) {
        this.setAttr('active', val);
    }

    static get observedAttributes() {
        return ['active'];
    }

    attributeChangedCallback(name, oldVal, newVal) {
        if (newVal === 'true') {
            this.render();
            setTimeout(() => {
                this.newScene();
            }, 2000);
        }
    }

    changeDigiConfig() {
        // _children[1.material._children[2].material
        // _children[1.material._children[3].material
    }

    newScene() {
        var view = this.shadow.getElementById('view');
        var canvas = document.createElement('canvas');
        canvas.id = 'renderCanvas';
        var engine = new BABYLON.Engine(canvas, true, {preserveDrawingBuffer: true, stencil: true});

        var createScene = function(){
            // Create a basic BJS Scene object
            var scene = new BABYLON.Scene(engine);
            // Create a FreeCamera, and set its position to {x: 0, y: 5, z: -10}
            var camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 5, -10), scene);
            // Target the camera to scene origin
            camera.setTarget(BABYLON.Vector3.Zero());
            // Attach the camera to the canvas
            camera.attachControl(canvas, false);
            // Create a basic light, aiming 0, 1, 0 - meaning, to the sky
            var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), scene);
            // make background transparent
            scene.clearColor = new BABYLON.Color4(0, 0, 0, 0);
            // add glb model to scene
            var digisette = BABYLON.SceneLoader.ImportMesh("", "./assets/nfts/digisette-ring-1.glb", "", scene, function (meshes) {
                   // Get the first mesh from the imported meshes array
                    var mesh = meshes[0];

                    // Adjust the position of the camera to zoom out
                    var camera = scene.activeCamera;
                    camera.position = new BABYLON.Vector3(0, 0, 60); // Update the z-coordinate to zoom out further

                    // enable scene glow
                    var gl = new BABYLON.GlowLayer("glow", scene);

                    // enable gltf lighting
                    var lightMain = new BABYLON.DirectionalLight("dir01", new BABYLON.Vector3(0, -0.5, 1.0), scene);

                    // get point lights from gltf
                    var pointLight01 = scene.getLightByName("Point");
                    var pointLight02 = scene.getLightByName("Point.001");
                    var pointLight03 = scene.getLightByName("Point.002");
                    var pointLight04 = scene.getLightByName("Light");

                    // lower intensity of point lights
                    pointLight01.intensity = 1.1;
                    pointLight02.intensity = 1.4;
                    pointLight03.intensity = 1.4;
                    pointLight04.intensity = 1.2;

                    // Focus the camera on the imported mesh
                    camera.setTarget(mesh.position);
            })
        

            // Return the created scene
            return scene;
        }

        view.appendChild(canvas);

        var scene = createScene();
        engine.runRenderLoop(function(){
            scene.render();
        });
    }

    connectedCallback() {
        this.render();
        if (this.getAttribute('active') === 'true') {
            setTimeout(() => {
                this.newScene();
            }, 2000);
        }
    }

    render() {
        this.shadow.innerHTML = `
            <style>
                :host {
                    display: block;
                    width: 100%;
                    height: 100%;
                    position: relative;
                    top: 0;
                    left: 0;
                }
                #view {
                    width: 100%;
                    height: auto;
                    position: absolute;
                    top: 0;
                    left: 0;
                }
                #renderCanvas {
                    width: 100%;
                    height: 100%;
                }
            </style>
            <div id="view">
            </div>
        `
    }
}

customElements.define('uni-3dviewer', uni3dViewer);

export { uni3dViewer};