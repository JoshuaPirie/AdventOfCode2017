require("fs").readFile(require("path").resolve(__dirname, "input"), "utf8", (err, data) => {
    let coords = { x: 0, y: 0, z: 0 };
    let origin = { x: 0, y: 0, z: 0 };
    let dirs = { 
        n:  c => { c.x++; c.z--; },
        s:  c => { c.z++; c.x--; },
        ne: c => { c.x++; c.y--; },
        nw: c => { c.y++; c.z--; },
        se: c => { c.z++; c.y--; },
        sw: c => { c.y++; c.x--; }
    };
    data.split(",").forEach(x => dirs[x](coords));
    console.log(distance(coords, origin));
});

function distance(a, b) {
    return (Math.abs(a.x - b.x) + Math.abs(a.y - b.y) + Math.abs(a.z - b.z)) / 2;
}
