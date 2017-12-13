let pipes = [];
require("fs").readFileSync(require("path").resolve(__dirname, "input"), "utf8").split(/\r?\n/).forEach(x => {
    let sides = x.split(" <-> ");
    pipes[parseInt(sides[0])] = sides[1].split(", ").map(Number);
});
let visited = new Set();
explore(0, pipes, visited);
console.log(visited.size);

function explore(index, pipes, visited) {
    visited.add(index);
    pipes[index].forEach(x => {
        if(!visited.has(x))
            explore(x, pipes, visited);
    });
}