console.log(require("fs").readFileSync(require("path").resolve(__dirname, "input"), "utf8").split(/\r?\n/).reduce((acc, curr) => {
    let nums = curr.split("\t").map(Number);
    return acc + Math.max.apply(null, nums) - Math.min.apply(null, nums);
}, 0));