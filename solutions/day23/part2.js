let input = require("fs").readFileSync(require("path").resolve(__dirname, "input"), "utf8").split(/\r?\n/)[0].substring(6) * 100 + 100000;
let result = 0;
for(let i = input; i <= input + 17000; i += 17) {
    for(let j = 2; j * j <= i; j++) {
        if(i % j == 0) {
            result++;
            break;
        }
    }
}
console.log(result);