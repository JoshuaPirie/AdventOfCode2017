require("fs").readFile(require("path").resolve(__dirname, "input"), "utf8", (err, data) => {
    let validPwds = 0;
    data.split(/\r?\n/).forEach(pwd => {
        let valid = true;
        pwd.split(" ").map(x => x.split('').sort().join('')).forEach((e, i, a) => {
            if(a.includes(e, i + 1)) {
                valid = false;
                return;
            }
        });
        if(valid)
            validPwds++;
    });
    console.log(validPwds);
});