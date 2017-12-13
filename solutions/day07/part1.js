require("fs").readFileSync(require("path").resolve(__dirname, "input"), "utf8").split(/\r?\n/).map(x => ({
    name: x.match(/[a-z]+/)[0],
    children: x.match(/[a-z]+/g).splice(1)
})).forEach((e, i, a) => {
    if(!a.some(x => x.children.includes(e.name)))
        console.log(e.name);
});