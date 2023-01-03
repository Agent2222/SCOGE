export class MainDialogue {
    constructor(npc, tone, lines) {
        this.npc = npc;
        this.tone = tone;
        this.lines = lines;
        this.element = document.getElementById('dialogueModal').shadowRoot.getElementById('diaMain');
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
              await this.delay(500);
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
        const choice = this.lines[0].choices[index];
        console.log(choice.text);
        this.lines.shift();
        if (this.lines.length === 0) {
          console.log('End of conversation.');
          return;
        }
        if (choice.action) {
          choice.action();
        }
        this.typeLine(this.lines[0]);
      }
  }
  

// const element = document.getElementById('dialogueModal').shadowRoot.getElementById('diaMain');
// element.innerHTML = '';
// const string = 'Hello, world *this* is a test';
// const options = {
//   speed: 50,
//   specialText1: "specialText1",
//   specialText2: "specialText2",
// };

// const typing = new Typing('Hello, World! ^This is $] some special text1 *And this $is some special $text2', element, options);

// typing.type();
