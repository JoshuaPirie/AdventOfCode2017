require("fs").readFile(require("path").resolve(__dirname, "input"), "utf8", (err, data) => {
    let state = data.split("\t").map(Number);
    let states = [];
    while(true) {
        states.push(state.toString());
        let maxIndex = state.reduce((c, x, i, a) => x > a[c] ? i : c, 0);
        let blocks = state[maxIndex];
        state[maxIndex] = 0;
        for(let i = 1; i <= blocks; i++)
            state[(maxIndex + i) % state.length]++;

        if(states.includes(state.toString()))
            break;
    }
    console.log(states.length - states.indexOf(state.toString()));
});