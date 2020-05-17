function addFirstToLast(items) {
  let firstLast = "";
  if (items.length > 0) {
    firstLast = items[0] + items[items.length - 1];
  }
  return firstLast;
}
