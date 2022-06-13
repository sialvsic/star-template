function add(a, b) {
  return a + b;
}

(function () {
  console.log("I am loading...");
  const result = add(1, 2);
  console.log("result", result);
})();
