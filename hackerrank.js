function plusMinus(arr) {
  var posnum = 0;
  var negnum = 0;
  var zero = 0;
  var total = arr.length;
arr.forEach((item) => {
if (item === 0) {
  zero++
} else if (item < 0) {
  negnum++
} else if (item > 0) {
  posnum++
}
})
  let psoratio = (posnum/total).toFixed(6);
  let negratio = (negnum/total).toFixed(6);
  let zeroratio = (zero/total).toFixed(6);

console.log(psoratio);
console.log(negratio);
console.log(zeroratio);
}
