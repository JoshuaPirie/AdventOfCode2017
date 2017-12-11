require("fs").readFile(require("path").resolve(__dirname, "input"), "utf8", (err, data) => {
    let sum = data.split(/\r?\n/).reduce((acc, curr) => {
        let nums = curr.split("\t").map(Number);
        return acc + Math.max.apply(null, nums) - Math.min.apply(null, nums);
    }, 0);
    console.log(sum);
});