require("fs").readFile(require("path").resolve(__dirname, "input"), "utf8", (err, data) => {
    let coords = { x: 0, y: 0, z: 0 };
    let origin = { x: 0, y: 0, z: 0 };
    data.split(",").forEach(x => {
        switch(x) {
            case "n":
                coords.x++;
                coords.z--;
                break;
            case "s":
                coords.z++;
                coords.x--;
                break;
            case "ne":
                coords.x++;
                coords.y--;
                break;
            case "nw":
                coords.y++;
                coords.z--;
                break;
            case "se":
                coords.z++;
                coords.y--;
                break;
            case "sw":
                coords.y++;
                coords.x--;
                break;
        }
    });
    console.log(distance(coords, origin));
});

function distance(a, b) {
    return (Math.abs(a.x - b.x) + Math.abs(a.y - b.y) + Math.abs(a.z - b.z)) / 2;
}
