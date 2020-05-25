function mutate(array) {
  const capsArray = array.map((item) => {
    const capsItem = item.toUpperCase();
    return capsItem;
  });
  return capsArray;
}

mutate(["a", "f"]);
