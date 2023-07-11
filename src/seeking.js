/* eslint-disable no-unused-vars */
import { gsap } from "gsap";

export class SeekDialogue {
    constructor(tone, lines) {
        this.tone = tone;
        this.lines = lines;
        this.timeline = window.timeline; 
        // this.element = document.getElementById('seekResp');
        this.contentBox = document.getElementById('seekResp');
        this.typingInProgress = false; // added flag
      }
    
      start(line, who) {
        this.element = document.createElement('p');
        this.element.classList.add(who);
        this.contentBox.appendChild(this.element);
        if (this.typingInProgress) {
          return;
        }
        // this.element.innerHTML = this.lines[0].text;
        this.typeLine(this.lines[line]);
      }
    
      typeLine(line) {
        this.string = line.text;
        this.words = this.stringToWordsArray(this.string);
        this.speed = this.getTypingSpeed(this.tone);
        this.i = 0;
        this.j = 0;
        this.typingInProgress = true;
        this.type().then(() => {
          if (this.i === this.words.length) {
            if (line.choices) {
              line.choices.forEach((choice, index) => {
               //
              });
            } else {
              console.log('End of conversation.');
            }
            this.typingInProgress = false; // set flag to false when typing is complete
          } 
        });
      }
    
      stringToWordsArray(string) {
        return string.split(' ');
      }
    
      async type() {
        if (this.i < this.words.length) {
          if (this.j < this.words[this.i].length) {
            let char = this.words[this.i][this.j];
            if (this.words[this.i][0] === '*') {
              char = this.words[this.i][this.j];
              if (char !== '*') {
                this.element.innerHTML += `<span class="${this.specialText1}">${char}</span>`;
              }
            } else if (this.words[this.i][0] === '^') {
              char = this.words[this.i][this.j];
              if (char !== '^') {
                this.element.innerHTML += `<span class="${this.specialText2}">${char}</span>`;
              }
            } else if (char === '$') {
              await this.delay(500).catch((err) => {
                console.log(err);
              }).catch((error) => {
                console.log(error);
              });
            } else if (char === ']') {
              this.element.innerHTML = '';
              this.j += 3;
            } else if (char.startsWith('%')) {
              let text = this.words[this.i].substring(this.j + 1, this.j + 2);
              this.element.innerHTML += `<span class="blink">${text}</span>`;
              this.j++;
            } else {
              this.element.innerHTML += char;
            }
            this.j++;
            await this.delay(this.speed).catch((err) => {
              console.log(err);
            }).catch((error) => {
              console.log(error);
            });
            this.type();
          } else {
            this.i++;
            this.j = 0;
            this.element.innerHTML += ' ';
            //
            if (this.element.classList.contains('sysResp') && this.i === this.words.length) {
              // Digisette & Community
                if (window.conversationHistory[0] === "seekOpt3" || window.conversationHistory[0] === "seekOpt5" && window.form1Active === false) {
                  document.getElementById('subGeneral')?.remove();
                  this.newElement = document.createElement('p');
                  this.newElement.innerHTML = `
                  <form id="subGeneral">
                    <input type="text" name="Category" value="" id="genCat">
                      <span id="genInfo">Info:</span>
                      <input type="text" name="Email" placeholder="name@email.com" id="genInput">
                      <input type="submit" value="| >" id="genSub">
                      <span id="genSubLoad">|</span>
                  </form>
                  `;
                  this.contentBox.appendChild(this.newElement);
                  gsap.to('#subGeneral', {duration: 1, opacity: 1, y: 0, ease: "power2.out"});
                  if (window.conversationHistory[0] === "seekOpt3") {
                    document.getElementById('genCat').value = "Digisette";
                  } else {
                    document.getElementById('genCat').value = "General";
                  }
                  window.sub();
              }
              // Contact
              if (window.seekType === "contact" && window.form1Active === false) {
                document.getElementById('subGeneral2')?.remove();
                this.newElement2 = document.createElement('div');
                this.newElement2.innerHTML = `
                <form id="subGeneral2">
                    <input type="text" name="Category" value="Hi" id="genCat2">
                    <span id="genInfo2">Info:</span>
                    <input type="text" name="Email" placeholder="name@email.com" id="genInput2"><br>
                    <textarea name="Info" id="genInput3" placeholder="Your Message:"></textarea><br>
                    <input type="submit" value="| >" id="genSub2">
                    <span id="genSubLoad2">|</span>
                </form>
                `;
                this.contentBox.appendChild(this.newElement2);
                gsap.to('#subGeneral2', {duration: 1, opacity: 1, y: 0, ease: "power2.out"});
                window.sub2();
              }
            }
            // check if the sentence is complete
            if (this.i === this.words.length) {
              // perform your action here
              if (this.element.classList.contains('userResp')) {
                setTimeout(() => {
                  window.dialogue.choose(0);
                }, 800);
              }
            }
            this.type();
          }
        }
      }
    
      async delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
    
      getTypingSpeed(tone) {
        switch (tone) {
          case 'hyper/angry':
            return 25;
          case 'friendly':
            return 50;
          case 'neutral':
            return 75;
          case 'calm':
            return 100;
          case 'sad':
            return 175;
          case 'mystery':
            return 185;
          default:
            return 60;
        }
      }

      openGallery(e) {
        this.selected = e?.target?.innerHTML;
        this.homeT = document.getElementById("homeTip");
        window.galleryActive = true;
        window.view = "gallery";
        gsap.to('#seekResp', {duration: 1, opacity: 0, y: 0, ease: "power2.out"});
        gsap.to('#seekOpt', {duration: 1, opacity: 0, y: 0, ease: "power2.out"});
        gsap.to('#manBG', {duration: 1, backgroundColor: '#ff002d', y: 0, ease: "power2.out"});
        gsap.to('#manBG', {duration: 1, border: 'var(--primary)', y: 0, ease: "power2.out"});
        gsap.to('#manBG', {duration: 1, scale: 1.3, y: 0, ease: "power2.out"});
        document.getElementById("seekBody").style.pointerEvents = "none";
        document.getElementById("manBG").style.userSelect = "none";
        document.getElementById("manBG").style.pointerEvents = "auto";
        document.getElementById("seekGallery").style.pointerEvents = "auto";
        setTimeout(() => {
          if (window.isMobile === true) {
            gsap.to('#simpleNoti', {duration: 1, opacity: 1, y: 0, ease: "power2.out"});
            window.galleryHelp.start();
            document.getElementById('simpleNoti').style.animationPlayState = "running";
            // Add here
            setTimeout(() => {
              gsap.to('#simpleNoti', {duration: 1, opacity: 0, y: 0, ease: "power2.out"});
              document.getElementById('simpleNoti').style.animationPlayState = "paused";
            }, 3000);
          }
          setTimeout(() => {
            gsap.fromTo("#seekGallery", {scale: 1}, {duration: .45, scale: 1.05, yoyo: true, repeat: 1});
          }, 3000);
        },1000)
        switch (this.selected) {
          case "IMAGES":
            document.getElementById("dropdown").setAttribute("class", "dropdown");
            gsap.to('#dropdown', {duration: 1, opacity: 1, y: 0, ease: "power2.out"});
            document.getElementById("dropdown").style.pointerEvents = "auto";
            this.homeT.innerHTML = "SEEK";
            window.viewingPg = true;
            window.galleryType = "images"; 
            gsap.to('#seekGallery', {duration: 2, opacity: 1, y: 0, ease: "power2.out"});
            gsap.to("#seekGallery", { duration: 1, scale: 1, ease: "power2.inOut"});
            gsap.to("#seekGallery", { duration: 1, filter: "blur(0px)", ease: "power2.inOut"});
            gsap.to('#videoGallery', {duration: 2, opacity: 0, y: 0, ease: "power2.out"});
            gsap.to("#videoGallery", { duration: 1, scale: 1.5, ease: "power2.inOut"});
            gsap.to("#videoGallery", { duration: 1, filter: "blur(5px)", ease: "power2.inOut"});
            break;
          case "VIDEO":
            document.getElementById("dropdown").setAttribute("class", "videodropdown");
            gsap.to('#dropdown', {duration: 1, opacity: 1, y: 0, ease: "power2.out"});
            document.getElementById("dropdown").style.pointerEvents = "auto";
            gsap.to('#soundToggle', {duration: 1, opacity: 1, y: 0, ease: "power2.out"});
            document.getElementById("soundToggle").style.pointerEvents = "auto";
            this.homeT.innerHTML = "SEEK";
            this.homeT.innerHTML = "SEEK";
            window.viewingPg = true;
            window.galleryType = "video"; 
            document.getElementById("portalVideo").style.display = "block";
            document.getElementById("portalVideo2").style.display = "block";
            gsap.to('#videoGallery', {duration: 2, opacity: 1, y: 0, ease: "power2.out"});
            gsap.to("#videoGallery", { duration: 1, scale: 1, ease: "power2.inOut"});
            gsap.to("#videoGallery", { duration: 1, filter: "blur(0px)", ease: "power2.inOut"});
            gsap.to('#seekGallery', {duration: 2, opacity: 0, y: 0, ease: "power2.out"});
            gsap.to("#seekGallery", { duration: 1, scale: 1.5, ease: "power2.inOut"});
            gsap.to("#seekGallery", { duration: 1, filter: "blur(5px)", ease: "power2.inOut"});
            break;
        }
        return;
      }
    
      choose(index) {
        const choice = this.lines[0].choices[index];
        //
        this.lines.shift();
        if (this.lines.length === 0) {
          console.log('End of conversation.');
          return;
        }
        if (choice.action) {
          choice.action();
        }
      }
  }
