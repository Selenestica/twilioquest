class Ducktypium {
  constructor(color) {
    if (color === "red" || color === "blue" || color === "yellow") {
      this.color = color;
    } else {
      console.log("Error!");
    }
  }
}
