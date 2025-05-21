import loading from "../assets/sound/loading.mp3";
import forgeInitS from "../assets/sound/forge-init.mp3";

var playing = {
  startVolume: 0.2,
  fullVolume: 0.6,
  running: false,
};

export class SoundtrackManager {
  constructor(newTracks) {
    this.tracks = {};
    this.newTracks = newTracks;
    this.trackList = [
      // MOVING
      { key: 'menuMove3', src: 'https://storage.scoge.co/scogeUniverse/sounds/scoge-menu1-move-3.mp3', artist: 'Menu', title: 'menuMove3' },
      { key: 'menuEnter3', src: 'https://storage.scoge.co/scogeUniverse/sounds/scoge-menu1-enter-3.mp3', artist: 'Menu', title: 'menuEnter3' },
      // LOADING
      { key: 'menuLoading1', src: 'https://storage.scoge.co/scogeUniverse/sounds/scoge-menu1-loading-1.mp3', artist: 'Menu', title: 'menuLoading1' },
      // ERROR
      { key: 'menuError1', src: 'https://storage.scoge.co/scogeUniverse/sounds/scoge-menu1-error-1.mp3', artist: 'Menu', title: 'menuError1' },
      // ENT EXT
      { key: 'menuEntrance1', src: 'https://storage.scoge.co/scogeUniverse/sounds/scoge-menu1-enterance-1.mp3', artist: 'Menu', title: 'menuEntrance1' },
      { key: 'running-2', src: 'https://storage.scoge.co/scogeUniverse/sounds/running-4.mp3', artist: 'movement', title: 'running-2' },
      { key: 'discovered-1', src: 'https://storage.scoge.co/scogeUniverse/sounds/discovered-2.mp3', artist: 'movement', title: 'discovered-1' },
      { key: 'explore-1', src: 'https://storage.scoge.co/scogeUniverse/sounds/explore-1.mp3', artist: 'movement', title: 'explore-1' },
      { key: 'dgOnline-1', src: 'https://storage.scoge.co/scogeUniverse/sounds/digisette-online-1.mp3', artist: 'main', title: 'dgOnline-1' },
      { key: 'combatOff-1', src: 'https://storage.scoge.co/scogeUniverse/sounds/combat-offline-1.mp3', artist: 'system', title: 'combatOff-1' },
      { key: 'combatOff-2', src: 'https://storage.scoge.co/scogeUniverse/sounds/combat-offline-2.mp3', artist: 'system', title: 'combatOff-2' },
      { key: 'openwindow-1', src: 'https://storage.scoge.co/scogeUniverse/sounds/open-window-1.mp3', artist: 'system', title: 'openwindow-1' },
      { key: 'closewindow-1', src: 'https://storage.scoge.co/scogeUniverse/sounds/close-window-2.mp3', artist: 'system', title: 'closewindow-1' },
      { key: 'typing-1', src: 'https://storage.scoge.co/scogeUniverse/sounds/typing-1wav.mp3', artist: 'system', title: 'typing-1' },
      { key: 'sendmessage-1', src: 'https://storage.scoge.co/scogeUniverse/sounds/sendmessage-1.mp3', artist: 'system', title: 'sendmessage-1' },
      { key: 'newmessage-1', src: '  https://storage.scoge.co/scogeUniverse/sounds/newmessage.mp3', artist: 'system', title: 'newmessage-1' },
      { key: 'reacclimate-1', src: 'https://storage.scoge.co/scogeUniverse/sounds/reacclimate-1_01.mp3', artist: 'canon', title: 'reacclimate-1' },
      { key: 'loading-1', src: loading, artist: 'system', title: 'loading-1' },
      { key: 'forgeInit', src: forgeInitS, artist: 'system', title: 'forgeInit' },
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

  movement(active, terrain) {
    switch (active) {
      case true:
        if (playing.running === false) {
          window.soundtrack.setVolume("running-2", playing.startVolume);
          setTimeout(() => {
            soundtrack.setVolume("running-2", playing.fullVolume);
          }, 1000);
          window.soundtrack.loop("running-2");
          window.soundtrack.play("running-2");
          playing.running = true;
        }
        break;
      case false:
        window.soundtrack.stop("running-2");
        playing.running = false;
        break;
      default:
    }
  }
}

export class SoundtrackManager2 {
  constructor(newTracks) {
    this.tracks = {};
    this.newTracks = newTracks;
    this.trackList = [
    ];
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

  movement(active, terrain) {
    switch (active) {
      case true:
        if (playing.running === false) {
          window.soundtrack.setVolume("running-2", playing.startVolume);
          setTimeout(() => {
            soundtrack.setVolume("running-2", playing.fullVolume);
          }, 1000);
          window.soundtrack.loop("running-2");
          window.soundtrack.play("running-2");
          playing.running = true;
        }
        break;
      case false:
        window.soundtrack.stop("running-2");
        playing.running = false;
        break;
      default:
    }
  }

  importNewTracks() {
    // console.log("Importing new tracks", this.newTracks);  
    this.trackList = this.newTracks;

    this.trackList.forEach(track => {
      this.tracks[track.key] = new Audio(track.src);
    });
  }
}
