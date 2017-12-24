let components = require("fs").readFileSync(require("path").resolve(__dirname, "input"), "utf8").split(/\r?\n/).map(x => x.split("/").map(Number));
let currBridges = components.filter(x => x.includes(0)).map(x => ({ indices: [components.indexOf(x)], pins: x.sort() }));
let bestScore = 0;
let bestLength = 0;
let scoreBridge = x => x.indices.reduce((acc, curr) => acc + components[curr][0] + components[curr][1], 0);
while(currBridges.length > 0) {
    let newBridges = [];
    currBridges.forEach(x => {
        let endPin = x.pins[x.pins.length - 1];
        let validExtensions = components.filter((y, i) => y.includes(endPin) && !x.indices.includes(i));
        if(validExtensions.length == 0) {
            if(x.indices.length > bestLength) {
                bestScore = scoreBridge(x);
                bestLength = x.indices.length;
            }
            else if(x.indices.length == bestLength) {
                let score = scoreBridge(x);
                if(score > bestScore)
                    bestScore = score;
            }
        }
        else
            validExtensions.forEach(y => newBridges.push({ indices: [...x.indices, components.indexOf(y)], pins: [...x.pins, y[0] == endPin ? y[1] : y[0]] }));
    });
    currBridges = newBridges;
}
console.log(bestScore);