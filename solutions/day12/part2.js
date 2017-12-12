require("fs").readFile(require("path").resolve(__dirname, "input"), "utf8", (err, data) => {
    let pipes = [];
    data.split(/\r?\n/).forEach(x => {
        let sides = x.split(" <-> ");
        pipes[parseInt(sides[0])] = sides[1].split(", ").map(Number);
    });
    let groups = 0;
    let currIndex = 0;
    let visited = new Set();
    while(currIndex < pipes.length) {
        explore(currIndex, pipes, visited);
        while(visited.has(currIndex))
            currIndex++;
        groups++;
    }
    console.log(groups);
});

function explore(index, pipes, visited) {
    visited.add(index);
    pipes[index].forEach(x => {
        if(!visited.has(x))
            explore(x, pipes, visited);
    });
}