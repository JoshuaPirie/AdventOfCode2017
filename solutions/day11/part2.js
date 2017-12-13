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
let furthest = 0;
require("fs").readFileSync(require("path").resolve(__dirname, "input"), "utf8").split(",").forEach(x => {
    dirs[x](coords);
    let dist = distance(coords, origin);
    if(dist > furthest)
        furthest = dist;
});
console.log(furthest);

function distance(a, b) {
    return (Math.abs(a.x - b.x) + Math.abs(a.y - b.y) + Math.abs(a.z - b.z)) / 2;
}