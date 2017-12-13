let list = Array.apply(null, {length: 256}).map(Number.call, Number);
let currPos = 0;
let skipSize = 0;
require("fs").readFileSync(require("path").resolve(__dirname, "input"), "utf8").split(",").forEach(x => {
    let newList = list.slice(0);
    for(let i = 0; i < x; i++)
        newList[(currPos + i) % list.length] = list[(currPos + x - i - 1) % list.length];
    list = newList;
    currPos += x + skipSize;
    skipSize++;
});
console.log(list[0] * list[1]);