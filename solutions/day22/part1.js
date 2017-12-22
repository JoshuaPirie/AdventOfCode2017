let nodeMap = require("fs").readFileSync(require("path").resolve(__dirname, "input"), "utf8").split(/\r?\n/).map(x => [...x].map(y => y == "#"));
let infected = new Set();
for(let y = 0; y < nodeMap.length; y++)
    for(let x = 0; x < nodeMap[0].length; x++)
        if(nodeMap[y][x])
            infected.add(`${x},${y}`);
let infections = 0;
let pos = { x: Math.floor(nodeMap[0].length / 2), y: Math.floor(nodeMap.length / 2) };
let dir = 0;
for(let i = 0; i < 10000; i++)
    burst();
console.log(infections);

function burst() {
    let posStr = `${pos.x},${pos.y}`;
    if(infected.delete(posStr)) {
        dir = (dir + 1) % 4;
    }
    else {
        infected.add(posStr);
        infections++;
        dir = (dir + 3) % 4;
    }
    switch(dir) {
        case 0:
            pos.y--;
            break;
        case 1:
            pos.x++;
            break;
        case 2:
            pos.y++;
            break;
        case 3:
            pos.x--;
            break;
    }
}