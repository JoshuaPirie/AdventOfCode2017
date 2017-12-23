let input = require("fs").readFileSync(require("path").resolve(__dirname, "input"), "utf8").split(/\r?\n/).map(x => x.split(" ").map(x => isNaN(x) ? x : parseInt(x)));
let registers = {};
let curr = 0;
let count = 0;
let resolve = x => isNaN(x) ? (registers[x] || 0) : x;
let operations = {
    set: (x, y) => registers[x] = resolve(y),
    sub: (x, y) => registers[x] -= resolve(y),
    mul: (x, y) => {
        registers[x] *= resolve(y);
        count++;
    },
    jnz: (x, y) => {
        if(resolve(x) != 0)
            curr += resolve(y) - 1;
    }
};
for(; curr < input.length; curr++)
    operations[input[curr][0]](input[curr][1], input[curr][2]);
console.log(count);