let str = "урок-3-был слишком легким";

str = str.charAt(0).toUpperCase() + str.slice(1);

str = str.replace(/-/g,' ').slice(0, -6).replace(/..$/,"o");

console.log(str);

let arr = [20, 33, 1, "Человек", 2, 3];
let result, sum = 0;

for (let i = 0, len = arr.length; i < len; i++) {
	if (typeof(arr[i]) == "number") sum += arr[i] ** 3;
}

result = Math.sqrt(sum);

console.log(result);
