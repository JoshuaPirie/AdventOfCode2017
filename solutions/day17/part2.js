let input = parseInt(require("fs").readFileSync(require("path").resolve(__dirname, "input"), "utf8"));
let after0 = 0;
let pos = 0;
for(let i = 1; i < 50000000; i++) {
    pos = (pos + input) % i + 1;
    if(pos == 1)
        after0 = i;
}
console.log(after0);