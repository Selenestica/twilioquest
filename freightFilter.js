function scanAndFilter(array, string) {
  let filteredArray = [];
  const newArray = array.filter((item) => item !== string);
  return newArray;
}

scanAndFilter(["dog", "ray gun", "cat", "zippers", "ray gun"], "ray gun");
