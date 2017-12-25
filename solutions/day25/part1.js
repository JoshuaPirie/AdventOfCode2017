class TuringMachine {
    constructor(prog, tape, state, pos = 0) {
        this.prog = prog;
        this.tape = tape;
        this.state = state;
        this.pos = pos;
    }
    step() {
        let instr = this.prog[this.state][this.tape[this.pos] || 0];
        this.tape[this.pos] = instr.W;
        this.pos += instr.M == "left" ? -1 : 1;
        this.state = instr.C;
    }
}

let input = require("fs").readFileSync(require("path").resolve(__dirname, "input"), "utf8")
    .replace(/\r?\n.*- (.).* (.*)./g, `"$1":"$2",`)
    .replace(/\r?\n.*?(.):(.*),/g, `"$1":{$2},`)
    .replace(/\r?\n.*?(.):(.*),\r?\n?/g, `"$1":{$2},`)
    .split(/\r?\n/);
let state = input[0].slice(-2, -1);
let steps = parseInt(input[1].match(/\d+/)[0]);
let prog = JSON.parse(`{${input[2].slice(0, -1)}}`);
let tm = new TuringMachine(prog, {}, state);
for(let i = 0; i < steps; i++)
    tm.step();
console.log(Object.values(tm.tape).reduce((acc, curr) => acc + parseInt(curr), 0));