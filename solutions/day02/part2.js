console.log(require("fs").readFileSync(require("path").resolve(__dirname, "input"), "utf8").split(/\r?\n/).reduce((acc, curr) => {
    let nums = curr.split("\t").map(Number);
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if(nums[i] % nums[j] == 0) 
                return acc + nums[i] / nums[j];
            if(nums[j] % nums[i] == 0)
                return acc + nums[j] / nums[i];
        }
    }
}, 0));