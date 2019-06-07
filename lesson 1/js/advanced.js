let num = 33721,
	str = num + "",
	production = 1;

for (let i = str.length - 1; i--;) {
	production *= +str[i];
}

console.log(production);
console.log(production ** 3);