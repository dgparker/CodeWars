// Implement the function unique_in_order which takes as argument a sequence and returns a list of items
// without any elements with the same value next to each other and preserving the original order of elements.

var uniqueInOrder = function(iterable) {
  var uniqueList = [];
  for (var i = 0; i < iterable.length; i++) {
    if (iterable[i] !== iterable[i + 1]) {
      uniqueList.push(iterable[i]);
    }
  }
  console.log(uniqueList);
};
console.log("--STRING--");
uniqueInOrder("AAAABBBCCDAABBB");
console.log("--ARRAY--");
uniqueInOrder(["A", "B", "C", "D", "A", "B"]);
