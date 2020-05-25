function calculateMass(array) {
  let num = 0;
  array.forEach((element) => {
    const length = element.length;
    num += length;
  });
  return num;
}
