require("fs").readFile(require("path").resolve(__dirname, "input"), "utf8", (err, data) => {
    let failed = true;
    let delay = -1;
    let firewall = [];
    data.split(/\r?\n/).forEach(x => {
        let sides = x.split(": ").map(Number);
        firewall[sides[0]] = sides[1];
    });
    while(failed) {
        failed = false;
        delay++;
        for(let i = 0; i < firewall.length; i++) {
            if(firewall[i] !== undefined && (i + delay) % ((firewall[i] - 1) * 2) == 0) {
                failed = true;
                break;
            }
        }
    }
    console.log(delay);
});