// Calculate the area of triangle?

// Example 1: Area When Base and Height is Known
// let baseValue=4, hightValue=3;
// const area=(baseValue*hightValue)/2
// console.log(area)//6

// Example 2: Area When All Sides are Known

    // let side1=3,side2=4,side3=5;
    // let s=(side1+side2+side3)/2

    // const areaOfTriangle=Math.sqrt(s*(s-side1)*(s-side2)*(s-side3))
    // console.log(areaOfTriangle)


function areaOfTwoSide(num1,num2){
    let area=(num1*num2)/2 // when given height and base
    return area
}
console.log(areaOfTwoSide(4,3)) 

function areaOfTriangle(num1,num2,num3){
    let s=(num1+num2+num3)/2
    const area=Math.sqrt(s*(s-num1)*(s-num2)*(s-num3))
    return area
}
console.log(areaOfTriangle(3,4,5))