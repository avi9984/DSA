function sortByFreq(str) {
    let map = new Map();
    for(let char of str) {
        map.get(char) ? map.set(char, map.get(char)+1) : map.set(char, 1)
    }
    console.log(map)
    let arr = Array.from(map).sort((a,b) => a[0]-b[0] || b[1]-a[1]);
    console.log(arr)
}

sortByFreq("evvvever")   