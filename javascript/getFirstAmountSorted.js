function getFirstAmountSorted(array, num) {
  const sortedArray = array.sort();
  const arrayItems = sortedArray.slice(0, num);
  return arrayItems;
}
