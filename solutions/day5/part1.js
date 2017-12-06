require("fs").readFile(require("path").resolve(__dirname, "input"), "utf8", (err, data) => {
    let steps = 0;
    let index = 0;
    let instructions = data.split(/\r?\n/).map(Number);
    while(true) {
        if(instructions[index] === undefined)
            break;
        let instruction = instructions[index];
        instructions[index]++;
        index += instruction;
        steps++;
    }
    console.log(steps);
});