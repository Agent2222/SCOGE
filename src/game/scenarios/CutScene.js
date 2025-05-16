
// Cut Scene Timer
// Soundtrack
// Text Animations
// Audio
// Video
// Map Movements
import { Scenario } from "../scenarios/Scenarios.js";
import { gsap } from "gsap";

export class CutScene extends Scenario {
constructor(scene) {
    super(scene);
    this.scene = scene;
    this.sceneTimer = null;
    this.titles = [];
    this.videos = [];
    this.tracks = [];
    this.currentSceneIndex = 0;
    this.isLoading = false;
    this.cutSceneEl = null;
    this.onShow = null;
}

    show() {
        if (!document.getElementById("currentCutSceneView")) {
            this.isVisible = true;
            if (this.onShow) this.onShow();
            // Append BG to body
            document.body.appendChild(this.cutSceneEl);
            this.cutSceneEl.style.display = "block";
            this.cutSceneEl.style.opacity = 1;
            let cutsceneVideo = document.querySelector(".cutscene-video");
            cutsceneVideo.style.display = "block";
            cutsceneVideo.style.opacity = 1;
            cutsceneVideo.play();
        }
    }

    transition() {
        this.scenes[this.currentSceneIndex].transition();
    }

    hide() {
        console.log(this.currentSceneIndex);
        console.log(this.scenes);
        // Hide the current scene on the page
        this.scenes[this.currentSceneIndex - 1].hide();
    }

    load() {
        if (this.isLoading) return;

        if (!document.getElementById('currentCutSceneView')) {
            this.cutSceneEl = document.createElement('div');
            this.cutSceneEl.classList.add('cutcurrentCutSceneScene');
            this.cutSceneEl.id = 'currentCutSceneView';
            this.cutSceneEl.style.zIndex = 12;
            this.cutSceneEl.style.position = 'absolute';
            this.cutSceneEl.style.width = '100%';
            this.cutSceneEl.style.height = '100%';
            this.cutSceneEl.style.top = 0;
            this.cutSceneEl.style.left = 0;
            this.cutSceneEl.style.opacity = 0;
        }

        // Load titles
        if (this.scene.titles) {
            console.log("LOOKING FOR SCENE", this.scene);
            this.scene.titles.forEach((title) => {
                const titleElement = document.createElement('div');
                titleElement.classList.add('cutscene-title');
                titleElement.id = `cutscene-title-${title.id}`;
                titleElement.innerText = title.text;
                titleElement.style.position = 'absolute';
                titleElement.style.top = `${title.y}px`;
                titleElement.style.left = `${title.x}px`;
                titleElement.style.zIndex = 10;
                this.cutSceneEl.appendChild(titleElement);
                this.titles.push(titleElement.id);
            })
        }

        // Load videos
        if (this.scene.videos) {
            this.scene.videos.forEach((video) => {
                const videoElement = document.createElement('video');
                videoElement.classList.add('cutscene-video');
                videoElement.id = `cutscene-video-${video.id}`;
                videoElement.src = video.src;
                videoElement.style.position = 'absolute';
                videoElement.style.top = `0px`;
                videoElement.style.left = `0px`;
                videoElement.preload = 'auto';
                videoElement.style.display = 'none';
                videoElement.style.opacity = 0;
                this.cutSceneEl.appendChild(videoElement);
                this.videos.push(videoElement.id);
                videoElement.addEventListener('ended', () => {
                     //
                });
            })
        }

        // Load tracks
        if (this.scene.tracks) {
            this.scene.tracks.forEach((track) => {
                const trackElement = document.createElement('audio');
                trackElement.classList.add('cutscene-track');
                trackElement.id = `cutscene-track-${track.id}`;
                trackElement.src = track.src;
                trackElement.preload = 'auto';
                trackElement.style.display = 'none';
                this.cutSceneEl.appendChild(trackElement);
                this.tracks.push(trackElement.id);
            }) 
        }
    }

    error() {
        // Handle any errors that occur during loading
        console.error('Error loading scenario');
    }

    destroy() {
        // Clean up any resources used by the scenario
        for (const scene of this.scenes) {
            scene.destroy();
        }
        this.scenes = [];
        this.currentSceneIndex = 0;
    }

}