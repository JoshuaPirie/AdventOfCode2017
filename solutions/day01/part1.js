console.log(require("fs").readFileSync(require("path").resolve(__dirname, "input"), "utf8").split("").reduce((acc, curr, i, a) => {
    if(curr == a[(i + 1) % a.length])
        acc += parseInt(curr);
    return acc;
}, 0));