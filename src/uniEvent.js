class UniEvent {
  constructor(boxClass, boxId, cordX, cordY) {
    this.universeCanvas = document.getElementById("universeCanvas");
    this.eventBox = document.createElement("div");
    this.eventBox.classList.add(boxClass);
    this.eventBox.id = boxId;

    this.position = position;
  }
  viewEvent() {
    console.log("viewEvent");
    // get info from database object an display it into the eventBox
  }
}