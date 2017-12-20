let particles = require("fs").readFileSync(require("path").resolve(__dirname, "input"), "utf8").split(/\r?\n/).map(x => {
    let obj = {};
    x.split(", ").map(y => y.split("=")).forEach(y => {
        let nums = y[1].replace(/<|>/g, "").split(",").map(Number);
        obj[y[0]] = { x: nums[0], y: nums[1], z: nums[2] };
    });
    return obj;
});

function tick() {
    particles.forEach(x => {
        x.v.x += x.a.x;
        x.v.y += x.a.y;
        x.v.z += x.a.z;
        x.p.x += x.v.x;
        x.p.y += x.v.y;
        x.p.z += x.v.z;
    });
}

for(let i = 0; i < 10000; i++)
    tick();

let closestI = -1;
let closestD = Infinity;
particles.forEach((x, i) => {
    let d = Math.abs(x.p.x) + Math.abs(x.p.y) + Math.abs(x.p.z);
    if(d < closestD) {
        closestI = i;
        closestD = d;
    }
});

console.log(closestI);