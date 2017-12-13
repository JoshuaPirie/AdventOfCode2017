let input = require("fs").readFileSync(require("path").resolve(__dirname, "input"), "utf8");
let steps = 0;
let index = 0;
let instructions = input.split(/\r?\n/).map(Number);
while(true) {
    if(instructions[index] === undefined)
        break;
    let instruction = instructions[index];
    if(instruction >= 3)
        instructions[index]--;
    else
        instructions[index]++;
    index += instruction;
    steps++;
}
console.log(steps);