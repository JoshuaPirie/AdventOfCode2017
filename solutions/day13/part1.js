let severity = 0;
let firewall = [];
require("fs").readFileSync(require("path").resolve(__dirname, "input"), "utf8").split(/\r?\n/).forEach(x => {
    let sides = x.split(": ").map(Number);
    firewall[sides[0]] = sides[1];
});
for(let i = 0; i < firewall.length; i++)
    if(firewall[i] !== undefined && i % ((firewall[i] - 1) * 2) == 0)
        severity += i * firewall[i];
console.log(severity);