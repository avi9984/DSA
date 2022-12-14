// Write a program to convert first letter to uppercase.

function firstCapitalize(str) {
  if (str.length === 0) return "empty string";
  let capitalize = str.charAt(0).toUpperCase() + str.slice(1);
  return capitalize;
}
console.log(firstCapitalize("abc, bcd"));

function capitalizeFirst(arr) {
  let res = [];
  if (arr.length === 0) return [];
  let str = arr[0][0].toUpperCase() + arr[0].slice(1);
  res.push(str);
  return res.concat(capitalizeFirst(arr.slice(1)));
}
console.log(capitalizeFirst(["abcd", "def"]));
