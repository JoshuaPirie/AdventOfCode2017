require("fs").readFile(require("path").resolve(__dirname, "input"), "utf8", (err, data) => {
    console.log(data.split(/\r?\n/).reduce((acc, curr) => acc + !curr.split(" ").map(x => x.split('').sort().join('')).some((e, i, a) => a.includes(e, i + 1)), 0));
});