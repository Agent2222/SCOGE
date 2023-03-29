/* eslint-disable no-unused-vars */
// import fleekStorage from "@fleekhq/fleek-storage-js";

export async function portal() {
    const gallery = document.getElementById('seekGallery');
    const gallery2 = document.getElementById('videoGallery');
    const video = document.getElementById('seekVideo');
    const img1 = document.getElementById('portalImg');
    const img2 = document.getElementById('portalImg2');
    const video1 = document.getElementById('portalVideo');
    const video2 = document.getElementById('portalVideo2');
    const fleekP = import.meta.env.VITE_fleekP;
    const fleekS = import.meta.env.VITE_fleekS;

  // window.imageFiles = await fleekStorage.listFiles({
  //   apiKey: fleekP,
  //   apiSecret: fleekS,
  //   prefix: 'scogeImages',
  //   getOptions: [
  //     'publicUrl',
  //   ],
  // }).catch((err) => {
  //   console.log(err);
  // });

  // console.log("images1",window.imageFiles);

  // window.videoFiles = await fleekStorage.listFiles({
  //   apiKey: fleekP,
  //   apiSecret: fleekS,
  //   prefix: 'scogeVideos/GeneralVideo',
  //   getOptions: [
  //     'publicUrl',
  //   ],
  // }).catch((err) => {
  //   console.log(err);
  // });


  const setupImages = await import('./imgassetdb.json').catch((error) => {
    console.log(error);
  });

  const setupVideo = await import('./vidassetdb.json').catch((error) => {
    console.log(error);
  });

  window.imageFiles = setupImages.images.array;
  window.videoFiles = setupVideo.videos.array;

  window.shuffleArray = (array) => {
    // Create a new array with the same values as the original array
    const shuffledArray = [...array];
    
    // Shuffle the values in the new array
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    
    return shuffledArray;
  }
  
  window.filteredVideos = window.shuffleArray(window.videoFiles);
  window.filteredImages = window.shuffleArray(window.imageFiles);

    // window.filteredImages = imageFiles;
    // window.filteredVideos = videoFiles;
    window.currentVideo;
    window.hiddenVideo;
    window.soundOn = false;

    const numMedia = window.imageFiles.length;
    const numVMedia = window.videoFiles.length;

    let currentMediaIndex = 1;
    let currentMedia = null;
    let nextMediaIndex = 2;
    let nextMedia = null;
    let current = 0;

    let currentVMediaIndex = 1;
    let currentVMedia = null;
    let nextVMediaIndex = 2;
    let nextVMedia = null;
    let currentV = 0;
  
    function showNextMedia() {    
      // check if video or image gallery 
        if (window.galleryType === "images") {
            img1.style.transition = "1s all";
            img2.style.transition = "1s all";
            currentMediaIndex = (currentMediaIndex + 1) % numMedia;
            currentMedia = window.filteredImages[currentMediaIndex];
            nextMediaIndex = (currentMediaIndex + 1) % numMedia;
            nextMedia = window.filteredImages[nextMediaIndex];
          // set up the next media to display
            if (current === 0) {
                img1.style.opacity = "0%";
                img2.style.opacity = "100%";
                img1.src = nextMedia.publicUrl;
                current = 1;
                return;
            } else {
                img1.style.opacity = "100%";
                img2.style.opacity = "0%";
                current = 0;
                // img1.src = currentMedia.publicUrl;
                // setTimeout(() => {
                img2.src = nextMedia.publicUrl;
                // }, 1300)
                return;
            }
        } else if (window.galleryType === "video") {
            video1.style.transition = "1s all";
            video2.style.transition = "1s all";
            currentVMediaIndex = (currentVMediaIndex + 1) % numVMedia;
            currentVMedia = window.filteredVideos[currentVMediaIndex];
            nextVMediaIndex = (currentVMediaIndex + 1) % numVMedia;
            nextVMedia = window.filteredVideos[nextVMediaIndex];
          // set up the next media to display
            if (currentV === 0) {
                video1.style.opacity = "0%";
                video2.style.opacity = "100%";
                window.currentVideo = video2;
                window.hiddenVideo = video1;
                video2.play();
                video1.pause();
                video1.currentTime = 0;
                video2.currentTime = 0;
                currentV = 1;
                if (window.soundOn === false) {
                    video2.muted = true;
                    video1.muted = true;
                } else {
                    video2.muted = false;
                    video1.muted = true;
                }
                return;
            } else {
                video1.style.opacity = "100%";
                video2.style.opacity = "0%";
                window.currentVideo = video1;
                window.hiddenVideo = video2;
                if (window.soundOn === false) {
                  video1.muted = true;
                  video2.muted = true;
                } else {
                  video1.muted = false;
                  video2.muted = true;
                }
                video2.currentTime = 0;
                video1.currentTime = 0;
                currentV = 0;
                video1.src = currentVMedia.publicUrl;
                video1.play();
                video2.pause();
                if (video1.src.includes("POR")) {
                  video1.setAttribute("class","videoEl")
                } else {
                  video1.setAttribute("class","mobileVideo")
                }
                setTimeout(() => {
                  video2.src = nextVMedia.publicUrl;
                  if (video2.src.includes("Seq")) {
                    video2.setAttribute("class","videoEl")
                  } else {
                    video2.setAttribute("class","mobileVideo")
                  }
                }, 1100)
                return;
            }
        }   
    }

    window.toggleSound = () => {
      console.log("toggle sound");
      var soundButton = document.getElementById('soundToggle');
      if (window.soundOn === true) {
        window.soundOn = false;
        window.currentVideo.muted = true;
        window.hiddenVideo.muted = true;
        soundButton.innerHTML = "- SOUND OFF -";
        return;
      } else {
        window.soundOn = true;
        console.log(window.currentVideo);
        window.currentVideo.muted = false;
        window.hiddenVideo.muted = true;
        soundButton.innerHTML = "- SOUND ON -";
        return;
      }
    }
  
    // add event listener to switch to the next media on click
    gallery.addEventListener('click', () => {
        showNextMedia();
    });
    gallery2.addEventListener('click', () => {
        showNextMedia();
    });
    document.getElementById('soundToggle').addEventListener('click', () => {
        window.toggleSound();
    }); 
  
    // show the first media
    showNextMedia();
  }