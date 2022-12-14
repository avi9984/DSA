// Lightweight
// Problem Statement

// Amy calls an array A, of length N “good” if it satisfies all the conditions below:

// · For each i(1<=i<=N) 0<=Ai<=109

// · Each element of the array is distinct.

// · Bitwise XOR of each subarray must have even number of bits set in its binary representation.

// For Example, if N = 3, A = [3, 0, 6] is a “good” array and bitwise XOR of all its subarrays have even number of bits set, for instance, A [2:3] = [0,6] and Bitwise XOR = 0^6 = 6 (110) has exactly 2 bits set.

// Weight of the array is the sum of elements present in the array.

// Amy wants you to find the minimum possible weight of a “good” array of length N.

// You are given T independent test cases.

// Constraints

// 1 <= T <= 1000
// 1 <= N <= 5*105
// All input values are integers.
// Input Format

// First-line contains T.
// Next T lines each contains a single integer N.
// Output Format
// Print in a newline for each test case a single integer denoting the minimum possible weight of a “good” array of length N.
// Sample Input 1
// 1
// 2
// Sample Output 1
// 3
// Explanation of Sample 1
// One possible “good” array with length 2 and minimum possible weight is: A = [3,0]

