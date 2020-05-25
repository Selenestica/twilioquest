function scan(array) {
  let indexes = [];
  let index = 0;
  array.forEach((element) => {
    if (element === "contraband") {
      indexes.push(index);
    }
    index += 1;
  });
  return indexes;
}

const indexes = scan(["dog", "contraband", "cat", "zippers", "contraband"]);
console.log("Contraband Indexes: " + indexes); // should be [1, 4]
