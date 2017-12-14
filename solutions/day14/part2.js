let input = require("fs").readFileSync(require("path").resolve(__dirname, "input"), "utf8");
const lookup = { '0': '0000', '1': '0001', '2': '0010', '3': '0011', '4': '0100', '5': '0101', '6': '0110', '7': '0111', '8': '1000', '9': '1001', 'a': '1010', 'b': '1011', 'c': '1100', 'd': '1101', 'e': '1110', 'f': '1111' };
const rows = 128;
const cols = 128;
let squares = [];
for(let i = 0; i < rows; i++)
    squares.push(knotHash(`${input}-${i}`).split("").reduce((acc, curr) => acc.concat(lookup[curr].split("").map(x => x == "1")), []));
console.log(countGroups(squares));

function countGroups(map) {
    let numGroups = 0;
    let visited = Array(rows).fill().map(() => Array(cols).fill(false));
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if(map[i][j] && !visited[i][j]) {
                dfs(map, visited, i, j);
                numGroups++;
            }
        }
    }
    return numGroups;
}

function dfs(map, visited, row, col) {
    visited[row][col] = true;
    if(row - 1 >= 0 && map[row - 1][col] && !visited[row - 1][col])
        dfs(map, visited, row - 1, col);
    if(row + 1 < rows && map[row + 1][col] && !visited[row + 1][col])
        dfs(map, visited, row + 1, col);
    if(col - 1 >= 0 && map[row][col - 1] && !visited[row][col - 1])
        dfs(map, visited, row, col - 1);
    if(col + 1 < cols && map[row][col + 1] && !visited[row][col + 1])
        dfs(map, visited, row, col + 1);
}

function knotHash(str) {
    let list = Array.apply(null, {length: 256}).map(Number.call, Number);
    let currPos = 0;
    let skipSize = 0;
    for(let j = 0; j < 64; j++) {
        str.split("").map(x => x.charCodeAt(0)).concat([17, 31, 73, 47, 23]).forEach(x => {
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
    return chunkedList.map(x => {
        let hex = x.reduce((acc, curr) => acc ^ curr).toString(16);
        if(hex.length == 1)
            hex = "0" + hex;
        return hex;
    }).join("");
}