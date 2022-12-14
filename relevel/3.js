// GCD XY
// GCD XY

// Problem Statement

// An array A, of X positive integers, is called “good” if the sum of all its elements is exactly Y, i.e., A1 + A2 + ….. + AX = Y.

// Cost of an array C, is defined as Greatest Common Divisor of all its element. C = GCD (A1 , A2 , ….., AX ).

// Find how many different values of C exists for “good” arrays of length X and sum Y and also find the maximum value of C among them.

// You are given T independent test cases.

// Constraints

// 1 <= T <= 10
// 1 <= X <= 105
// 1 <= X <= Y <= 109
// All input values are integers.
// Input Format

// First-line contains T.
// Next T lines each contains two space separated integers X and Y.
// Output Format

// Print in a newline for each test case two space separated integers denoting how many different values of C exists for “good” arrays of length X and sum Y and also find the maximum value of C among them, respectively.
// Sample Input 1

// 2

// 2 4

// 2 5

// Sample Output 1

// 2 2

// 1 1

// Explanation of Sample 1

// For 1st test case, possible value of C = {1, 2}

// We can get C = 1, if A = [3, 1]

// We can get C = 2, if A = [2, 2]

// For 2nd test case, we can only get C = 1,

// One possible “good” array to get C =1, is A = [ 2, 3]

// Function candidate has to implement
// function gcdXY(x,y)
// {
//   let sum=0;
//   for(let i=0; i<(x+y).length; i++){
//     sum +=i
//   }
//   return sum;

// }
function candidate(X, Y) {
    let a = []
    let sum = 0
    for (let i = 0; i < X; i++) {
        a.push(i)
        sum += i
    }
    if (sum < Y) {
        a[a.length - 1] += Y - sum
    } else if (sum > Y) {
        a[a.length - 1] -= sum - Y
    }
    let c = a[0]
    for (let i = 1; i < a.length; i++) {
        c = gcd(c, a[i])
    }
    return [1, c]
}

let gcd = function (x, y) {
    if (y == 0)
        return x;
    else
        return gcd(y, x % y);
}


//Driver Code
// var t =readline();
// while(t--)
// {
// 	var temp = readline().trim();
// 	var s = temp.split(" ");
// 	for(i=0;i<2;i++)
// 	{
// 	    s[i]=Number(s[i]);
// 	}
//     var x=s[0];
//     var y=s[1];
// 	var num  = gcdXY(x,y);
// 	console.log(num[0]+" "+num[1]);
// }

console.log(candidate(2,4))