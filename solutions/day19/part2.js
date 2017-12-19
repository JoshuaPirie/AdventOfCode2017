let input = require("fs").readFileSync(require("path").resolve(__dirname, "input"), "utf8").split(/\r?\n/);
let pos = { x: input[0].indexOf("|"), y: 0 };
let dir = { x: 0, y: 1 };
let steps = 1;
while(follow())
    steps++;
console.log(steps);
function follow() {
    let next = input[pos.y + dir.y][pos.x + dir.x];
    if(next != " ") {
        pos.x += dir.x;
        pos.y += dir.y;
        return true;
    }
    
    let temp = dir.x;
    dir.x = dir.y;
    dir.y = temp;
    next = input[pos.y + dir.y][pos.x + dir.x];
    if(next != " ") {
        pos.x += dir.x;
        pos.y += dir.y;
        return true;
    }

    dir.x = -dir.x;
    dir.y = -dir.y;
    next = input[pos.y + dir.y][pos.x + dir.x];
    if(next != " ") {
        pos.x += dir.x;
        pos.y += dir.y;
        return true;
    }
    
    return false;
}