let state = require("fs").readFileSync(require("path").resolve(__dirname, "input"), "utf8").split("\t").map(Number);
let states = [];
while(true) {
    states.push(state.toString());
    let maxIndex = state.reduce((acc, curr, i, a) => curr > a[acc] ? i : acc, 0);
    let blocks = state[maxIndex];
    state[maxIndex] = 0;
    for(let i = 1; i <= blocks; i++)
        state[(maxIndex + i) % state.length]++;

    if(states.includes(state.toString()))
        break;
}
console.log(states.length - states.indexOf(state.toString()));