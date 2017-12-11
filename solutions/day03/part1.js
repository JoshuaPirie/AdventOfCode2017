require("fs").readFile(require("path").resolve(__dirname, "input"), "utf8", (err, data) => {
    data = parseInt(data);
    let size = Math.ceil(Math.sqrt(data));
    let center = Math.ceil((size - 1) / 2);
    let cycle = data - (Math.pow(size - 2, 2));
    let innerOffset = cycle % (size - 1);
    let result = center + Math.abs(innerOffset - center);
    console.log(result);
});