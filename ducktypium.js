class Ducktypium {
  constructor(color) {
    try {
      if (color === "red" || color === "blue" || color === "yellow") {
        this.color = color;
      } else {
        throw new Error("Color must be red, yellow, or blue!");
      }
    } catch (e) {
      console.log(e);
    }
    this.calibrationSequence = [];
  }
  refract(color) {
    try {
      if (color === "red" || color === "blue" || color === "yellow") {
        if (color === this.color) {
          return color;
        } else if (
          (color === "red" && this.color === "blue") ||
          (color === "blue" && this.color === "red")
        ) {
          return "purple";
        } else if (
          (color === "yellow" && this.color === "blue") ||
          (color === "blue" && this.color === "yellow")
        ) {
          return "green";
        } else if (
          (color === "yellow" && this.color === "red") ||
          (this.color === "yellow" && color === "red")
        ) {
          return "orange";
        }
      } else {
        throw new Error("Color must be red, yellow, or blue!");
      }
    } catch (e) {
      console.log(e);
    }
  }
  calibrate(numArray) {
    let newArray = [];
    for (let i = 0; i < numArray.length; i++) {
      let newNum = numArray[i] * 3;
      newArray.push(newNum);
    }
    const sortedArray = newArray.sort((a, b) => a - b);
    this.calibrationSequence = sortedArray;
  }
}
