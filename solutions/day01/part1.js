require("fs").readFile(require("path").resolve(__dirname, "input"), "utf8", (err, data) => {
    let sum = 0;
    for(let i = 0; i < data.length; i++)
        if(data[i] == data[(i + 1) % data.length])
            sum += parseInt(data[i]);
    console.log(sum);
});