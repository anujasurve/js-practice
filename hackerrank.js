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

//flipping the matrix
function flippingmatrix(matrix){
    let n = matrix.length/2;
    let max =0;
    let total = 0;
    for(let row=0 ;row<n; row++){
        for(let col=0;col<n; col++){
            //max = Number.MIN_VALUE;
            max = Math.max(matrix[row][col],max);
            max = Math.max(matrix[row][2 * n-col-1],max);
            max = Math.max(matrix[2*n-row-1][col],max);
            max = Math.max(matrix[2*n-row-1][2 * n-col-1],max)
            total += max
        }
    }
    return total
}
console.log(flippingmatrix([[112, 42, 83, 119],[56, 125, 56, 49],[15, 78, 101, 43],[62, 98, 114, 10]]));


    
//Transform array into zigzag

function transform(array){
    let arr = array.sort();
    let length = arr.length;
    let firstPart = arr.slice(0,length/2);
    let lastpart = (arr.slice(length/2,length-1)).reverse();
    let middlepart = arr.slice(length-1,length);
    let final = firstPart.concat(middlepart).concat(lastpart)
    return final;
}
console.log(transform([1,5,6,2,3,4,7]));



//  * Complete the 'caesarCipher' function below.
//  *
//  * The function is expected to return a STRING.
//  * The function accepts following parameters:
//  *  1. STRING s
//  *  2. INTEGER k

function cipherRot3(str,n) {
  //str = str.toUpperCase();
  return str.replace(/[a-z]/g, rot3);

  function rot3(correspondance) {
    const charCode = correspondance.charCodeAt();
    //A = 90, Z = 122
    return String.fromCharCode(
            ((charCode + n) <= 122) ? charCode + n
                                    : (charCode + n) % 122 + 90
           );
  }
}
console.log(cipherRot3("anuja-Ahgh",3))

//or this ans

function cipherRot3(s,k) {
if(k > 26){
   var j=k%26-1;
  }
  //str = str.toUpperCase();
  return s.replace(/[A-Z a-z]/g, rot3);
  
 

  function rot3(correspondance) {
    const charCode = correspondance.charCodeAt();
    //A = 90, Z = 122 okffng-Qwvb
    if(charCode <= 90){
    	return String.fromCharCode(((charCode + j) <= 90) ? charCode + j : (charCode + j) % 90 + 64);
    }
    if(charCode <= 122){
    	return String.fromCharCode(((charCode + j) <= 122) ? charCode + j : (charCode + j) % 122 + 97);
    }
  }
}
document.write(cipherRot3("www.abc.xy",87));
