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

//Given a number , for each integer i in the range from i to n  inclusive, print one value per line as follows:
//if i  is a multiple of both 3 and 5 return "FizzBuzz"
//if i  is a multiple of 3 but not 5 print "Fizz"
//if i  is a multiple of 5 but not 3 print "Buzz"
//if i is not a multiple of 3 or 5 print value of i

function check(n){
    for (let i=1; i<=15; i++){
        if((i%3 == 0) && (i%5 == 0)){
            console.log('FizzBuzz')
        }
        if((i%3 == 0) && (i%5 != 0)){
            console.log('Fizz')
        }
        if((i%3 != 0) && (i%5 == 0)){
            console.log('Buzz')
        }
        if((i%3 != 0) && (i%5 != 0)){
            console.log(i)
        }
    }
}
console.log(check(15));


//Given a square matrix, calculate the absolute difference between the sums of its diagonals.

function diagonalDifference(arr) {
    
    var sumDiagnoalOne=0
    var sumDiagnoalTwo=0
    for(var i=0; i<arr.length; i++){
    
        for(var j=i; j<arr.length; j++){
            sumDiagnoalOne+=arr[i][j]
            break
        }
    }
    var checkArray=[]
    arr.map(array=>checkArray.push(array.reverse()))
    for(var i=0; i<checkArray.length; i++){
    
        for(var j=i; j<checkArray.length; j++){
            sumDiagnoalTwo+=checkArray[i][j]
            break
        }
    }
    return Math.abs(sumDiagnoalOne- sumDiagnoalTwo)

}
console.log(diagonalDifference)
