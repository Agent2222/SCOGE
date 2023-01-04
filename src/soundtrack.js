//
export class SoundtrackManager {
  constructor() {
    this.tracks = {};
    this.trackList = [
      // MOVING
      // { key: 'menuMove', src: 'https://storageapi.fleek.one/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Sounds/universe-sound/scoge-menu1-move.wav', artist: 'Menu', title: 'menuMove' },
      // { key: 'menuMove2', src: 'https://storageapi.fleek.one/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Sounds/universe-sound/scoge-menu1-move2.wav', artist: 'Menu', title: 'menuMove2' },
      { key: 'menuMove3', src: 'https://storageapi.fleek.one/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Sounds/universe-sound/scoge-menu1-move-3.wav', artist: 'Menu', title: 'menuMove3' },
      // { key: 'menuMove4', src: 'https://storageapi.fleek.one/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Sounds/universe-sound/scoge-menu1-move-4.wav', artist: 'Menu', title: 'menuMove4' },
      // ENTERING
      // { key: 'menuEnter1', src: 'https://storageapi.fleek.one/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Sounds/universe-sound/scoge-menu1-enter-1.wav', artist: 'Menu', title: 'menuEnter1' },
      // { key: 'menuEnter2', src: 'https://storageapi.fleek.one/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Sounds/universe-sound/scoge-menu1-enter-2.wav', artist: 'Menu', title: 'menuEnter2' },
      { key: 'menuEnter3', src: 'https://storageapi.fleek.one/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Sounds/universe-sound/scoge-menu1-enter-3.wav', artist: 'Menu', title: 'menuEnter3' },
      // LOADING
      { key: 'menuLoading1', src: 'https://storageapi.fleek.one/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Sounds/universe-sound/scoge-menu1-loading-1.wav', artist: 'Menu', title: 'menuLoading1' },
      // ERROR
      { key: 'menuError1', src: 'https://storageapi.fleek.one/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Sounds/universe-sound/scoge-menu1-error-1.wav', artist: 'Menu', title: 'menuError1' },
      // ENT EXT
      { key: 'menuEntrance1', src: 'https://storageapi.fleek.one/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Sounds/universe-sound/scoge-menu1-enterance-1.wav', artist: 'Menu', title: 'menuEntrance1' },
      { key: 'menuExitSys1', src: 'https://storageapi.fleek.one/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Sounds/universe-sound/scoge-menu1-exitSys-1.wav', artist: 'Menu', title: 'menuExitSys1' },
      { key: 'scoge1', src: 'https://storageapi.fleek.one/b2612349-1217-4db2-af51-c5424a50e5c1-bucket/Sounds/main/scoge-soleil.wav', artist: 'Main', title: 'scoge1' },
    ];

    this.trackList.forEach(track => {
      this.tracks[track.key] = new Audio(track.src);
    });
  }

  play(key) {
    this.tracks[key].play();
  }

  pause(key) {
    this.tracks[key].pause();
  }

  stop(key) {
    this.tracks[key].pause();
    this.tracks[key].currentTime = 0;
  }

  setVolume(key, volume) {
    this.tracks[key].volume = volume;
  }
}

  