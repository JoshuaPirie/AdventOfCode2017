let input = require("fs").readFileSync(require("path").resolve(__dirname, "input"), "utf8").split(/\r?\n/).map(x => parseInt(x.match(/\d+/)[0]));
let generator1 = gen(input[0], 16807);
let generator2 = gen(input[1], 48271);
let count = 0;
for(let i = 0; i < 40000000; i++)
    if((generator1.next().value & 0xFFFF) == (generator2.next().value & 0xFFFF))
        count++;
console.log(count);

function* gen(start, factor) {
    let index = start;
    while(true)
        yield index = (index * factor) % 2147483647;
}