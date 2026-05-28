/* You want to find the nth number in a series using the following parameters: 
     The first four numbers in the series are always set as n1=1, n2=2, n3=3,n4=4
     Subsequent numbers in the sries are obtained by summing the four preceding numbers.

     Write a functions findNthNumber that takes an integer n as input and  returns the value of the nth number in the series.

     Constraints:
     1<=n <=50

     e.g1
     input n=6
     output: 19
     Exp: The first four numbers in the series are always 1,2,3,4. The fifth number in the series is obtained by summing the 
     previous four numbers: 1+2+3+4=10. Similarly, the sixth number is obtained by summing the previous four numbers:
     2+3+4+10=19

     e.g2
     input n=2
     output: 2
     Exp: The second number in the series is 2

     e.g3
     input: n=8
     output: 69
     Exp: 
     n5 = 1 + 2 + 3 + 4 = 10
     n6 = 2 + 3 + 4 + 10 = 19
     n7 = 3 + 4 + 10 + 19 = 36
     n8 = 4 + 10 + 19 + 36 = 69
     
*/

function findNthNumber(n){
    
    if(1===n) return 1;
    if(2===n) return 2;
    if(3===n) return 3;
    if(4===n) return 4;
    
    let a=1, b=2, c=3, d=4
    let res
    
    for(let i=5; i<=n; i++){
        res=a+b+c+d
        
        a=b;
        b=c;
        c=d
        d=res
    }
    return res
}
console.log(findNthNumber(6))
console.log(findNthNumber(2))
console.log(findNthNumber(8))
