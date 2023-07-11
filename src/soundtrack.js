export class SoundtrackManager {
  constructor() {
    this.tracks = {};
    this.trackList = [
      // MOVING
      { key: 'menuMove3', src: 'https://storage.fleek-internal.com/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Sounds/universe-sound/scoge-menu1-move-3.wav', artist: 'Menu', title: 'menuMove3' },
      { key: 'menuEnter3', src: 'https://storage.fleek-internal.com/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Sounds/universe-sound/scoge-menu1-enter-3.wav', artist: 'Menu', title: 'menuEnter3' },
      // LOADING
      { key: 'menuLoading1', src: 'https://storage.fleek-internal.com/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Sounds/universe-sound/scoge-menu1-loading-1.wav', artist: 'Menu', title: 'menuLoading1' },
      // ERROR
      { key: 'menuError1', src: 'https://storage.fleek-internal.com/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Sounds/universe-sound/scoge-menu1-error-1.wav', artist: 'Menu', title: 'menuError1' },
      // ENT EXT
      { key: 'menuEntrance1', src: 'https://storage.fleek-internal.com/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Sounds/universe-sound/scoge-menu1-enterance-1.wav', artist: 'Menu', title: 'menuEntrance1' },
      { key: 'menuExitSys1', src: 'https://storage.fleek-internal.com/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Sounds/universe-sound/scoge-menu1-exitSys-1.wav', artist: 'Menu', title: 'menuExitSys1' },
      { key: 'scoge1', src: 'https://storage.fleek-internal.com/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Sounds/main/scoge-soleil.wav', artist: 'Main', title: 'scoge1' },
    ];

    this.trackList.forEach(track => {
      this.tracks[track.key] = new Audio(track.src);
    });
  }

  async play(key) {
    try {
      await this.tracks[key].play();
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
