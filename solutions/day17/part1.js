let input = parseInt(require("fs").readFileSync(require("path").resolve(__dirname, "input"), "utf8"));
let buffer = [0];
let pos = 0;
for(let i = 1; i < 2018; i++) {
    pos = (pos + input) % buffer.length + 1;
    buffer.splice(pos, 0, i);
}
console.log(buffer[pos + 1]);