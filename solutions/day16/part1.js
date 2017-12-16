let dancers = String.fromCharCode(...Array(113).keys()).slice(97).split("");
let moves = {
    s: x => dancers = dancers.splice(-parseInt(x)).concat(dancers),
    x: x => {
        let ind = x.split("/").map(Number);
        let temp = dancers[ind[0]];
        dancers[ind[0]] = dancers[ind[1]];
        dancers[ind[1]] = temp;
    },
    p: x => {
        let ind = x.split("/").map(y => dancers.indexOf(y));
        let temp = dancers[ind[0]];
        dancers[ind[0]] = dancers[ind[1]];
        dancers[ind[1]] = temp;
    }
};
require("fs").readFileSync(require("path").resolve(__dirname, "input"), "utf8").split(",").forEach(x => moves[x[0]](x.substring(1)));
console.log(dancers.join(""));