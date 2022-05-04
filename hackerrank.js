//Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.
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


//Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. 
//Then print the respective minimum and maximum values as a single line of two space-separated long integers.

function miniMaxSum(arr) {
let min = Math.min(...arr);
let max = Math.max(...arr);
    let sum = arr.reduce((a, b) => a + b);
console.log((sum-max) + ' ' + (sum-min));

}


//Given a time in -hour AM/PM format, convert it to military (24-hour) time.

function timeConversion(s) {
const ampm = s.slice(-2);
    const hours = Number(s.slice(0, 2));
    let time = s.slice(0, -2);
    if (ampm === 'AM') {
        if (hours === 12) { // 12am edge-case
            return  time.replace(s.slice(0, 2), '00');
        }
        return time;
    } else if (ampm === 'PM') {
        if (hours !== 12) {
            return time.replace(s.slice(0, 2), String(hours + 12));
        } 
        return time; // 12pm edge-case
    }
console.log(time)
}

