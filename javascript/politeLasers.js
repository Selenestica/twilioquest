function getLaserSetting(word) {
  if (word === "please") {
    const setting = "OFF";
    return setting;
  } else {
    const setting = "ON";
    return setting;
  }
}

const laserSetting = getLaserSetting("please");
console.log("The current laser setting is: " + laserSetting);
