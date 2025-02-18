// import { SoundtrackManager } from "./soundtrack.js";

import { doc } from "prettier";

export class MainDialogue {
    constructor(dialogue) {
        this.npc = dialogue[0].character;
        this.tone = dialogue[0].tone;
        this.lines = dialogue;
        this.nameSet = false;
        // this.element = document.getElementById('dialogueModal').shadowRoot.getElementById('diaMain');
        this.specialText1 = "bold";
        this.specialText2 = "bright";
        // this.soundtrack = new SoundtrackManager();
        this.currentDialogue = 0;
        this.pauseDelay = 500;
        this.element = document.getElementById("miniAgent").shadowRoot.getElementById("chat");
      }
    
      start() {
        this.typeLine(this.lines[0]);
      }
    
      typeLine(line) {
        this.string = line.text;
        this.words = this.stringToWordsArray(this.string);
        this.speed = this.getTypingSpeed(this.tone);
        this.i = 0;
        this.j = 0;
        this.type().then(() => {
          line.choices.forEach((choice, index) => {
            // console.log(`${index + 1}: ${choice.text}`);
          });
        });
      }
    
      stringToWordsArray(string) {
        return string.split(' ');
      }
    
      async type() {
        if (this.nameSet == false) {
          const nameEl = document.createElement('span');
          const lineBreak = document.createElement('br');
          const lineBreak2 = document.createElement('br');
          nameEl.className = 'name';
          nameEl.textContent = this.npc + ':';
          this.element.appendChild(nameEl);
          this.element.appendChild(lineBreak);
          // this.element.appendChild(lineBreak2);
          this.nameSet = true;
        }
        if (this.i < this.words.length) {
          window.soundtrack.setVolume("typing-1", 0.8);
          window.soundtrack.stop("typing-1");
          window.soundtrack.play("typing-1");
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
              await this.delay(this.pauseDelay);
            } else if (char === ']') {
              this.element.innerHTML = '';
              this.j += 3;
            } else {
              this.element.innerHTML += char;
            }
            this.j++;
            await this.delay(this.speed);
            this.type();
          } else {
            this.i++;
            this.j = 0;
            this.element.innerHTML += ' ';
            this.type();
          }
        } else {
            if (this.lines[this.currentDialogue].waiter != null) {
              //
            } else {
              if (this.lines[this.currentDialogue].choices.length > 1) {
                this.nameSet = false;
                const spanElement = document.createElement('span');
                const lineBreak = document.createElement('br');
                const lineBreak2 = document.createElement('br');
                spanElement.className = 'continueBut';
                spanElement.textContent = this.lines[this.currentDialogue].choices[0].text;
                spanElement.addEventListener("click", () => {
                  this.lines[this.currentDialogue].choices[0].action();
                })
                // Append the new span element to the existing element
                this.element.appendChild(lineBreak);
                this.element.appendChild(lineBreak2);
                this.element.appendChild(spanElement);
                //
                this.nameSet = false;
                const spanElement2 = document.createElement('span');
                const lineBreak3 = document.createElement('br');
                const lineBreak4 = document.createElement('br');
                spanElement.className = 'continueBut';
                spanElement.textContent = this.lines[this.currentDialogue].choices[1].text;
                this.element.appendChild(lineBreak3);
                this.element.appendChild(lineBreak4);
                this.element.appendChild(spanElement2);
              } else {
                // Create a new span element
                this.nameSet = false;
                const spanElement = document.createElement('span');
                const lineBreak = document.createElement('br');
                const lineBreak2 = document.createElement('br');
                spanElement.className = 'continueBut';
                spanElement.textContent = this.lines[this.currentDialogue].choices[0].text;
                spanElement.addEventListener("click", () => {
                  this.lines[this.currentDialogue].choices[0].action();
                })
                // Append the new span element to the existing element
                this.element.appendChild(lineBreak);
                this.element.appendChild(lineBreak2);
                this.element.appendChild(spanElement);
              }
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
          case 'unfriendly':
            return 100;
          case 'sad':
            return 175;
          default:
            return 75;
        }
      }
    
      choose(index) {
        const choice = this.lines[this.currentDialogue].choices[index];
        this.element.innerHTML = "";
        // console.log(choice);
        // this.lines.shift();
        this.currentDialogue++;
        // if (choice.action) {
        //   choice.action();
        // }
        setTimeout(()=> {
          this.typeLine(this.lines[index]);
        },500)
      }

      end() {
        document.getElementById("miniAgent").setAttribute("active", "false");
        setTimeout(() => {
          document.getElementById("miniAgent").shadowRoot.getElementById("main").style.display = "none";
        }, 800);
      }
  }
  

/* 
Key

* - Special Text 1 
^ - Special Text 2
$ - Pause Delay
] - New Lines

ex - Hello, World! ^This is $] some special text1 *And this $is some special ^text2

*/