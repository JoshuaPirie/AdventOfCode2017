let particles = require("fs").readFileSync(require("path").resolve(__dirname, "input"), "utf8").split(/\r?\n/).map(x => {
    let obj = {};
    x.split(", ").map(y => y.split("=")).forEach(y => {
        let nums = y[1].replace(/<|>/g, "").split(",").map(Number);
        obj[y[0]] = { x: nums[0], y: nums[1], z: nums[2] };
    });
    return obj;
});

function tick() {
    for(let i = particles.length - 1; i >= 0; i--) {
        let x = particles[i];
        let found = false;
        for(let j = i - 1; j >= 0; j--) {
            let y = particles[j];
            if(x.p.x == y.p.x && x.p.y == y.p.y && x.p.z == y.p.z) {
                particles.splice(j, 1);
                i--;
                found = true;
            }
        }
        if(found)
            particles.splice(i, 1);
    }
    particles.forEach(x => {
        x.v.x += x.a.x;
        x.v.y += x.a.y;
        x.v.z += x.a.z;
        x.p.x += x.v.x;
        x.p.y += x.v.y;
        x.p.z += x.v.z;
    });
}

for(let i = 0; i < 1000; i++)
    tick();

console.log(particles.length);