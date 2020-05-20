function calculatePower(array) {
  let sum = 0;
  array.forEach((num) => {
    sum += num;
  });
  const double = sum * 2;
  return double;
}
