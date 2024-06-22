// Take an input and check weather the input is valid number or not

function isValidNumber(input) {
  let isValid = true;
  for (let i = 0; i < input.length; i++) {
    if (input[i] >= "0" && input[i] <= "9") {
      continue;
    } else {
      isValid = false;
      break;
    }
  }
  return isValid;
}
console.log(isValidNumber("1234"));
console.log(isValidNumber("12bb34b"));

// function isValid(input){
//     let regex=new RegExp("^[0-9]+$");
//     return regex.test(input);
// }
// console.log(isValid("12334343"))
// console.log(isValid("12334dkjhdkjd343"))
