require("fs").readFile(require("path").resolve(__dirname, "input"), "utf8", (err, data) => {
    data = parseInt(data);
    let x, y, matrix;
    x = y = 0;
    matrix = {};
    matrix[x + "," + y] = 1;
    while(true) {
        let val = getValue(matrix, x, y);
        if(val >= data) {
            console.log(val);
            break;
        }
        matrix[x + "," + y] = val;
        if((x !== y || x >= 0) && Math.abs(x) <= Math.abs(y))
            x += y >= 0 ? 1 : -1;
        else
            y += x >= 0 ? -1 : 1;
    }
});

function getValue(matrix, posX, posY) {
    let sum = 0;
    for(let x = posX - 1; x <= posX + 1; x++)
        for(let y = posY - 1; y <= posY + 1; y++)
            if(matrix[x + "," + y])
                sum += matrix[x + "," + y];
    return sum;
}