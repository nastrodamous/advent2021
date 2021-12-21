//down increases
//up decreases

const fs = require("fs");

const lines = fs
    .readFileSync("input.txt", { encoding: "utf-8" })
    .split("\n")
    .filter((x) => Boolean(x))
    .map((x) => {
        const [direction, n] = x.split(" ");
        return {
            direction,
            x: parseInt(n),
        };
    });

let submarine = {
    position: 0,
    depth: 0,
};
for(const line of lines) {
    switch(line.direction) {
        case "forward" :
            submarine.position += line.x
            break;
        case "up" :
            submarine.depth -= line.x
            break;
        case "down" :
            submarine.depth += line.x
    }
}

console.log(submarine.position * submarine.depth)

let submarineAim = {
    position: 0,
    depth: 0,
    aim: 0,
}

for(const line of lines) {
    switch(line.direction) {
        case "forward" :
            submarineAim.position += line.x
            submarineAim.depth += submarineAim.aim * line.x
            break;
        case "up" :
            submarineAim.aim -= line.x
            break;
        case "down" :
            submarineAim.aim += line.x
    }
}

console.log(submarineAim.position * submarineAim.depth)