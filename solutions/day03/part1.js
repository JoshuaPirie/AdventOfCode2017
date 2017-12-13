let input = parseInt(require("fs").readFileSync(require("path").resolve(__dirname, "input"), "utf8"));
let size = Math.ceil(Math.sqrt(input));
let center = Math.ceil((size - 1) / 2);
let cycle = input - (Math.pow(size - 2, 2));
let innerOffset = cycle % (size - 1);
let result = center + Math.abs(innerOffset - center);
console.log(result);