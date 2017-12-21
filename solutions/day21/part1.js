let rules = require("fs").readFileSync(require("path").resolve(__dirname, "input"), "utf8").split(/\r?\n/).map(x => {
    let parts = x.split(" => ");
    let first = gridify(parts[0]);
    let strs = [];
    return {
        srcs: [
            first,
            [...first].reverse(),
            first.map(y => [...y].reverse()),
            [...first].reverse().map(y => [...y].reverse()),
            rotateClockwise(first),
            rotateCounterClockwise(first),
            rotateClockwise(first).reverse(),
            rotateCounterClockwise(first).reverse()
        ].filter((e, i, a) => {
            if(!strs.includes(e.toString())) {
                strs.push(e.toString());
                return true;
            }
            return false;
        }).map(y => ungridify(y)),
        dest: parts[1]
    };
});

let rules2x2 = rules.filter(x => x.dest.length == 11);
let rules3x3 = rules.filter(x => x.dest.length == 19);
let currPattern = ".#./..#/###";
for(let i = 0; i < 5; i++)
    currPattern = iter(currPattern);
console.log(currPattern.match(/#/g).length);

function iter(pattern) {
    let pGrid = gridify(pattern);
    let isEven = pGrid.length % 2 == 0;
    let ruleSet = isEven ? rules2x2 : rules3x3;
    let splitSize = isEven ? 2 : 3;
    let newSplitSize = splitSize + 1;
    let newSize = pGrid.length / splitSize * newSplitSize;
    let newPGrid = new Array(newSize).fill().map(x => new Array(newSize));
    for(let y = 0; y < pGrid.length / splitSize; y++)
        for(let x = 0; x < pGrid.length / splitSize; x++)
            setSquare(getRule(getSquare(pGrid, x * splitSize , y * splitSize, splitSize), ruleSet), newPGrid, x * newSplitSize, y * newSplitSize);
    return ungridify(newPGrid);
}

function setSquare(pattern, pGrid, x, y) {
    let pPart = gridify(pattern);
    for(let j = 0; j < pPart.length; j++)
        for(let i = 0; i < pPart.length; i++)
            pGrid[y + j][x + i] = pPart[j][i];
}

function getSquare(pGrid, x, y, size) {
    let pPart = new Array(size).fill().map(x => new Array(size));
    for(let j = 0; j < size; j++)
        for(let i = 0; i < size; i++)
            pPart[j][i] = pGrid[y + j][x + i];
    return ungridify(pPart);
}

function getRule(pattern, rules) {
    return rules.find(x => x.srcs.includes(pattern)).dest;
}

function gridify(pattern) {
    return pattern.split("/").map(x => x.split(""));
}

function ungridify(pGrid) {
    return pGrid.map(y => y.join("")).join("/");
}

function rotateCounterClockwise(arr) {
    let a = arr.map(x => [...x]);
    let n = a.length;
    for(let i = 0; i < n / 2; i++) {
        for(let j = i; j < n - i - 1; j++) {
            let tmp = a[i][j];
            a[i][j] = a[j][n - i - 1];
            a[j][n - i - 1] = a[n - i - 1][n - j - 1];
            a[n - i - 1][n - j - 1] = a[n - j - 1][i];
            a[n - j - 1][i] = tmp;
        }
    }
    return a;
}

function rotateClockwise(arr) {
    let a = arr.map(x => [...x]);
    let n = a.length;
    for(let i = 0; i < n / 2; i++) {
        for(let j = i; j < n - i - 1; j++) {
            let tmp = a[i][j];
            a[i][j] = a[n - j - 1][i];
            a[n - j - 1][i] = a[n - i - 1][n - j - 1];
            a[n - i - 1][n - j - 1] = a[j][n - i - 1];
            a[j][n - i - 1] = tmp;
        }
    }
    return a;
}