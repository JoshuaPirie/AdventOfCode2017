require("fs").readFile(require("path").resolve(__dirname, "input"), "utf8", (err, data) => {
    let list = Array.apply(null, {length: 256}).map(Number.call, Number);
    let currPos = 0;
    let skipSize = 0;
    for(let j = 0; j < 64; j++) {
        data.split("").map(x => x.charCodeAt(0)).concat([17, 31, 73, 47, 23]).forEach(x => {
            x = parseInt(x);
            let newList = list.slice(0);
            for(let i = 0; i < x; i++)
                newList[(currPos + i) % list.length] = list[(currPos + x - i - 1) % list.length];
            list = newList;
            currPos += x + skipSize;
            skipSize++;
        });
    }
    let chunkedList = [];
    while(list.length)
        chunkedList.push(list.splice(0, 16));
    let result = chunkedList.map(x => {
        let hex = x.reduce((acc, curr) => acc ^ curr).toString(16);
        if(hex.length == 1)
            hex = "0" + hex;
        return hex;
    }).join("");
    console.log(result);
});