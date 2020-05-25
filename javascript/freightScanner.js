function scan(array) {
  let num = 0;
  array.forEach((item) => {
    if (item === "contraband") {
      num += 1;
    }
  });
  return num;
}
