require("fs").readFile(require("path").resolve(__dirname, "input"), "utf8", (err, data) => {
    let registers = {};
    let operators = {
        "inc": (x, y) => x + y,
        "dec": (x, y) => x - y,
        "==": (x, y) => x == y,
        "!=": (x, y) => x != y,
        ">": (x, y) => x > y,
        "<": (x, y) => x < y,
        ">=": (x, y) => x >= y,
        "<=": (x, y) => x <= y
    };
    data.split(/\r?\n/).forEach(ins => {
        ins = ins.match(/^([a-z]+) (inc|dec) (-?\d+) if ([a-z]+) (.+) (-?\d+)$/).splice(1, 6);
        ins = {
            target: ins[0],
            oper: ins[1],
            amount: parseInt(ins[2]), 
            cond: {
                target: ins[3],
                oper: ins[4],
                amount: parseInt(ins[5])
            }
        }
        if(!(ins.target in registers))
            registers[ins.target] = 0;
        if(!(ins.cond.target in registers))
            registers[ins.cond.target] = 0;

        if(operators[ins.cond.oper](registers[ins.cond.target], ins.cond.amount))
            registers[ins.target] = operators[ins.oper](registers[ins.target], ins.amount);
    });
    console.log(Math.max.apply(null, Object.keys(registers).map(key => registers[key])));
});