let arr = [];
let arraysLength = +prompt("Cколько массивов включить во внутрь arr", "");

for (i = 0; i < arraysLength; i++) {
	let sum = 0, temp = [];
	for (j = 0; j < 5; j++) {
		let a = randomInteger(1, 500);
		temp.push(a);
		sum += a;
	}
	arr.push(temp);
	console.log("Сумма: " + sum);
}

function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  rand = Math.floor(rand);
  return rand;
}