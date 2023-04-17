export class chatRoom {
    constructor(roomName, roomDescription) {
      this.roomName = roomName;
      this.roomDescription = roomDescription;
      this.messages = [];
      this.io = null;
    }
  
    static create(roomName, roomDescription) {
      return new chatRoom(roomName, roomDescription);
    }

    callback(changes) {
      console.log('Array has been modified:', changes);
    }
  
    addMessage(message) {
      // this.messages.push(message);
      const proxy = new Proxy(this.messages, {
        set: (target, property, value) => {
          const result = Reflect.set(target, property, value);
          this.callback({property, value});
          return result;
        }
      });
      proxy.push(message); 
    }
  
    getMessages() {
      return this.messages;
    }
  
    setIo(io) {
      this.io = io;
      console.log('io set', this.io);
    }
  
    getIo() {
      return this.io;
    }
  
    getRoomName() {
      return this.roomName;
    }
  
    getRoomDescription() {
      return this.roomDescription;
    }
  
    getRoomData() {
      return {
        roomName: this.roomName,
        roomDescription: this.roomDescription,
        messages: this.messages,
      };
    }
  }