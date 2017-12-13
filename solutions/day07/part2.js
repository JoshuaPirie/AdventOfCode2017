let uneven = {};
require("fs").readFileSync(require("path").resolve(__dirname, "input"), "utf8").split(/\r?\n/).map(x => ({
    name: x.match(/[a-z]+/)[0],
    weight: parseInt(x.match(/\d+/)[0]),
    children: x.match(/[a-z]+/g).splice(1)
})).forEach((e, i, a) => {
    let childWeights = e.children.map(x => getWeight(getProgram(x, a), a));
    if(childWeights.length >= 2) {
        let weightsSet = [...new Set(childWeights)];
        if(weightsSet.length == 2) {
            let isDiff = childWeights.reduce((acc, curr) => curr == weightsSet[0] ? acc + 1 : acc, 0) == 1;
            let diffIndex = childWeights.indexOf(weightsSet[isDiff ? 0 : 1]);
            let newWeight = getProgram(e.children[diffIndex], a).weight + weightsSet[isDiff ? 1 : 0] - weightsSet[isDiff ? 0 : 1];
            uneven[childWeights[diffIndex]] = newWeight;
        }
    }
});
console.log(uneven[Math.min.apply(null, Object.keys(uneven))]);

function getWeight(program, programs) {
    return program.weight + program.children.reduce((acc, curr) => acc + getWeight(programs[programs.map(x => x.name).indexOf(curr)], programs), 0);
}

function getProgram(progName, programs) {
    return programs[programs.map(x => x.name).indexOf(progName)];
}