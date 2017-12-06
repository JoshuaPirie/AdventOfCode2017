let fs = require("fs");
let path = require("path");
fs.readFile(path.resolve(__dirname, "input"), "utf8", (err, data) => {
    let sum = 0;
    for(let i = 0; i < data.length; i++)
        if(data[i] == data[(i + data.length / 2) % data.length])
            sum += parseInt(data[i]);
    console.log(sum);
});