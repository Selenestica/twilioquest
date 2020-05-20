const string1 = process.argv[2];
const string2 = process.argv[3];
const array = [string1, string2];
const sortedArray = array.sort();

if (string1.toLowerCase() === string2.toLowerCase()) {
  console.log("0");
} else if (string1 === sortedArray[1]) {
  console.log("1");
} else if (string2 === sortedArray[1]) {
  console.log("-1");
}
