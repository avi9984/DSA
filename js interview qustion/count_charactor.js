// count the characters of given string 
// const str = "jati hu mai jaldi hai kya?";

const str = "jaati hu mai jaldi hai kya?";
let obj = {};
for (let x of str) {
    if (obj[x]) {
        obj[x] += 1;
    } else {
        obj[x] = 1;
    }
}

// console.log(obj);

function charCount(str) {
    let obj = {};
    for (let x of str) {
        if (obj[x]) {
            obj[x] += 1;
        } else {
            obj[x] = 1;
        }
    }
    return obj;
}
console.log(charCount("Avinash kumar"));

