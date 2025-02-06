// import { SoundtrackManager } from "./soundtrack.js";

export class MainDialogue {
    constructor(npc, tone, lines) {
        this.npc = npc;
        this.tone = tone;
        this.lines = lines;
        // this.element = document.getElementById('dialogueModal').shadowRoot.getElementById('diaMain');
        this.specialText1 = "bold";
        this.specialText2 = "bright";
        // this.soundtrack = new SoundtrackManager();
        this.currentDialogue = 0;
        this.pauseDelay = 500;
        this.element = document.getElementById("miniAgent").shadowRoot.getElementById("chat");
      }
    
      start() {
        console.log(`${this.npc}: ${this.tone}`);
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
            console.log(`${index + 1}: ${choice.text}`);
          });
        });
      }
    
      stringToWordsArray(string) {
        return string.split(' ');
      }
    
      async type() {
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
        const choice = this.lines[index].choices[0];
        this.element.innerHTML = "";
        console.log(choice.text);
        this.lines.shift();
        if (this.lines.length === 0) {
          console.log('End of conversation.');
          return;
        }
        if (choice.action) {
          choice.action();
        }
        setTimeout(()=> {
          this.typeLine(this.lines[0]);
        },500)
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