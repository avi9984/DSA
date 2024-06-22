
function power(n, pow) {
    let result = 1;
    for (let i = 0; i < pow; i++) {
        result = result * n
        // console.log(result);
    }
    return result
}
console.log((power(2, 4)));