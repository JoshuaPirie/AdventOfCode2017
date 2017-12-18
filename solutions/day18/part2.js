let input = require("fs").readFileSync(require("path").resolve(__dirname, "input"), "utf8").split(/\r?\n/).map(x => x.split(" ").map(x => isNaN(x) ? x : parseInt(x)));
let program1 = { curr: 0, msgs: [], wait: false, sent: 0, p: 0 };
let program2 = { curr: 0, msgs: [], wait: false, sent: 0, p: 1 };
program1.dest = program2;
program2.dest = program1;
let resolve = (r, x) => isNaN(x) ? (r[x] || 0) : x;
let operations = {
    snd: (r, x) => {
        r.dest.msgs.push(resolve(r, x));
        r.sent++;
    },
    set: (r, x, y) => r[x] = resolve(r, y),
    add: (r, x, y) => r[x] += resolve(r, y),
    mul: (r, x, y) => r[x] *= resolve(r, y),
    mod: (r, x, y) => r[x] %= resolve(r, y),
    rcv: (r, x) => {
        if(r.msgs.length > 0)
            r[x] = r.msgs.shift();
        else
            r.wait = true;
    },
    jgz: (r, x, y) => {
        if(resolve(r, x) > 0)
            r.curr += resolve(r, y) - 1;
    }
};
let step = p => {
    if(p.curr < input.length) {
        p.wait = false;
        operations[input[p.curr][0]](p, input[p.curr][1], input[p.curr][2]);
        if(!p.wait)
            p.curr++;
    }
    else
        p.wait = true;
};
while(!(program1.wait && program2.wait)) {
    step(program1);
    step(program2);
}
console.log(program2.sent);