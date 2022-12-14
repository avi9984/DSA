
function bark() {
    console.log('Woof!');
  }
  
  bark.animal = 'dog';
//   bark()
//   A: Nothing, this is totally fine!
//   B: SyntaxError. You cannot add properties to a function this way.
//   C: "Woof" gets logged.
//   D: ReferenceError

function getAge(...args) {
    console.log(typeof args);
  }
  
//   getAge(21);
//   A: "number"
//   B: "array"
//   C: "object" 
//   D: "NaN"

const numbers = [1, 2, 3];
numbers[10] = 11;
console.log(numbers);
// A: [1, 2, 3, 7 x null, 11]
// B: [1, 2, 3, 11]
// C: [1, 2, 3, 7 x empty, 11]
// D: SyntaxError