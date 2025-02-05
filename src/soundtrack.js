import loading from "../assets/sound/loading.mp3";

export class SoundtrackManager {
  constructor() {
    this.tracks = {};
    this.trackList = [
      // MOVING
      { key: 'menuMove3', src: 'https://storage.scoge.co/scogeUniverse/sounds/scoge-menu1-move-3.wav', artist: 'Menu', title: 'menuMove3' },
      { key: 'menuEnter3', src: 'https://storage.scoge.co/scogeUniverse/sounds/scoge-menu1-enter-3.wav', artist: 'Menu', title: 'menuEnter3' },
      // LOADING
      { key: 'menuLoading1', src: 'https://storage.scoge.co/scogeUniverse/sounds/scoge-menu1-loading-1.wav', artist: 'Menu', title: 'menuLoading1' },
      // ERROR
      { key: 'menuError1', src: 'https://storage.scoge.co/scogeUniverse/sounds/scoge-menu1-error-1.wav', artist: 'Menu', title: 'menuError1' },
      // ENT EXT
      { key: 'menuEntrance1', src: 'https://storage.scoge.co/scogeUniverse/sounds/scoge-menu1-enterance-1.wav', artist: 'Menu', title: 'menuEntrance1' },
      { key: 'menuExitSys1', src: 'https://storage.scoge.co/scogeUniverse/sounds/scoge-menu1-exitSys-1.wav', artist: 'Menu', title: 'menuExitSys1' },
      { key: 'scoge1', src: 'https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Sounds/main/scoge-soleil.wav', artist: 'Main', title: 'scoge1' },
      { key: 'pegasus', src: 'https://storage.scoge.co/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Soundtrack/Pegasus.mp3', artist: 'Soundtrack', title: 'pegasus' },
      { key: 'running-2', src: 'https://storage.scoge.co/scogeUniverse/sounds/running-4.wav', artist: 'movement', title: 'running-2' },
      { key: 'discovered-1', src: 'https://storage.scoge.co/scogeUniverse/sounds/discovered-2.wav', artist: 'movement', title: 'discovered-1' },
      { key: 'explore-1', src: 'https://storage.scoge.co/scogeUniverse/sounds/explore-1.wav', artist: 'movement', title: 'explore-1' },
      { key: 'dgOnline-1', src: 'https://storage.scoge.co/scogeUniverse/sounds/digisette-online-1.wav', artist: 'main', title: 'dgOnline-1' },
      { key: 'combatOff-1', src: 'https://storage.scoge.co/scogeUniverse/sounds/combat-offline-1.wav', artist: 'system', title: 'combatOff-1' },
      { key: 'combatOff-2', src: 'https://storage.scoge.co/scogeUniverse/sounds/combat-offline-2.wav', artist: 'system', title: 'combatOff-2' },
      { key: 'openwindow-1', src: 'https://storage.scoge.co/scogeUniverse/sounds/open-window-1.wav', artist: 'system', title: 'openwindow-1' },
      { key: 'closewindow-1', src: 'https://storage.scoge.co/scogeUniverse/sounds/close-window-2.wav', artist: 'system', title: 'closewindow-1' },
      { key: 'typing-1', src: 'https://storage.scoge.co/scogeUniverse/sounds/typing-1wav.wav', artist: 'system', title: 'typing-1' },
      { key: 'sendmessage-1', src: 'https://storage.scoge.co/scogeUniverse/sounds/sendmessage-1.wav', artist: 'system', title: 'sendmessage-1' },
      { key: 'newmessage-1', src: '  https://storage.scoge.co/scogeUniverse/sounds/newmessage.wav', artist: 'system', title: 'newmessage-1' },
      { key: 'reacclimate-1', src: 'https://storage.scoge.co/scogeUniverse/sounds/reacclimate-1_01.mp3', artist: 'canon', title: 'reacclimate-1' },
      { key: 'loading-1', src: loading, artist: 'system', title: 'loading-1' },
    ];

    this.trackList.forEach(track => {
      this.tracks[track.key] = new Audio(track.src);
    });
  }

  async play(key) {
    try {
      await this.tracks[key].play();
      // when the track ends make window.spokeAcclimate = true;
      this.tracks[key].addEventListener('ended', () => {
        if (key === 'reacclimate-1') {
          window.spoke.spokeAcclimate = true;
        }
      });
    } catch (error) {
      // console.error('Failed to play audio:', error);
    }
  }

  async pause(key) {
    try {
      await this.tracks[key].pause();
    } catch (error) {
      // console.error('Failed to pause audio:', error);
    }
    // this.tracks[key].pause();
  }

  stop(key) {
    try {
      this.tracks[key].pause();
      this.tracks[key].currentTime = 0;
    } catch (error) {
      console.error('Failed to stop audio:', error);
    }
  }

  setVolume(key, volume) {
    this.tracks[key].volume = volume;
  }

  loop(key) {
    this.tracks[key].loop = true;
  }  
}
