let dancers = String.fromCharCode(...Array(113).keys()).slice(97).split("");
let states = [ dancers.join("") ];
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
let input = require("fs").readFileSync(require("path").resolve(__dirname, "input"), "utf8").split(",");
let iter = 1;
while(true) {
    input.forEach(x => moves[x[0]](x.substring(1)));
    let state = dancers.join("");
    let index = states.indexOf(state);
    if(index == -1)
        states.push(state);
    else
        break;
    iter++;
}
console.log(states[1000000000 % iter]);