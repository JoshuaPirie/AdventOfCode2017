let input = parseInt(require("fs").readFileSync(require("path").resolve(__dirname, "input"), "utf8"));
let bufLen = 1;
let after0 = 0;
let pos = 0;
for(let i = 1; i < 50000000; i++) {
    pos = (pos + input) % bufLen + 1;
    if(pos == 1)
        after0 = i;
    bufLen++;
}
console.log(after0);