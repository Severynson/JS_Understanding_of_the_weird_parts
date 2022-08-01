var arr6 = _.map(arr1, function (item) {
  return item * 3;
});

console.log("from underscoreJS libriary: ", arr6);
const paragraphForLoging = document.getElementById("paragraphForLoging");
console.log(paragraphForLoging);
paragraphForLoging.insertAdjacentText(
  "beforeend",
  "from underscoreJS libriary: " + arr6
);

var arr7 = _.filter([2, 3, 4, 5, 6, 7], (item) => item % 2 === 0);

paragraphForLoging.insertAdjacentText("beforeend", " ||| " + arr7);

paragraphForLoging.insertAdjacentText(
  "beforeend",
  " ||| " + [2, 3, 4, 5, 6, 7].filter((item) => item % 2 === 0)
);
