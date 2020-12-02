const fs = require("fs")

let input = fs.readFileSync("./input", "utf-8")

let total = 0;

let lines = input.split("\r\n")

for(let i = 0; i < lines.length; i++) {
    let amount = lines[i].split(" ")[0]
    let char = lines[i].split(" ")[1].slice(0, -1)
    let str = lines[i].split(" ")[2]
    if(str[parseInt(amount.split("-")[0])-1] === char || str[parseInt(amount.split("-")[1])-1] === char){
        if(!(str[parseInt(amount.split("-")[0])-1] === char && str[parseInt(amount.split("-")[1])-1] === char)){
            total++
        }
    }
}

console.log(total)