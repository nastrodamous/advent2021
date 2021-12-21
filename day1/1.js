const fs = require("fs");

const lines = fs
	.readFileSync("input.txt", { encoding: "utf-8" })
	.split("\n")
	.filter((x) => Boolean(x))
	.map((x) => parseInt(x));

	let sum = 0
	for (let i = 0; i < lines.length; i++){
		if(lines[i] > lines[i-1]) {
			sum++
		}
	}

	let pairs = 0
	for (let i = 3; i < lines.length; i++){
		const previous = lines[i - 1] + lines[i - 2] + lines[i - 3]
		const current = lines[i] + lines[i - 1] + lines[i - 2]
		if (current > previous) {
			pairs++
		}
	}
	console.log(sum)
	console.log(pairs)