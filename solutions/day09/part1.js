let currLevel = 0;
let garbage = false;
let ignore = false;
let total = 0;
require("fs").readFileSync(require("path").resolve(__dirname, "input"), "utf8").split("").forEach(x => {
    switch(x) {
        case "{":
            if(!garbage && !ignore)
                currLevel++;
            ignore = false;
            break;
        case "}":
            if(!garbage && !ignore) {
                total += currLevel;
                currLevel--;
            }
            ignore = false;
            break;
        case "<":
            if(!ignore)
                garbage = true;
            ignore = false;
            break;
        case ">":
            if(!ignore)
                garbage = false;
            ignore = false;
            break;
        case "!":
            ignore = !ignore;
            break;
        default:
            ignore = false;
            break;
    }
});
console.log(total);