const fs = require("fs")

let input = fs.readFileSync("./input", "utf-8")

let total = 0;

let lines = input.split("\r\n")

for(let i = 0; i < lines.length; i++) {
    let amount = lines[i].split(" ")[0]
    let char = lines[i].split(" ")[1].slice(0, -1)
    let str = lines[i].split(" ")[2]
    let used = 0;
    /* count amount of characters used in the string */
    for (let n = 0; n < str.length; n++) {
        if(str[n] == char) { used++ }
    }
    /* check amount of characters used is not lower than the lowest bound or higher than the highest */
    if(!(used < parseInt(amount.split("-")[0]) || used > parseInt(amount.split("-")[1]))){
        console.log(lines[i])
        total++
    }
}

console.log(total)