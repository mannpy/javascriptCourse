let week = [
	"Воскресенье",
	"Понедельник",
	"Вторник",
	"Среда",
	"Четверг",
	"Пятница",
	"Суббота"];

let date = new Date();
let today = date.getDay();


for (let i = 0, len = week.length; i < len; i++){
	if (i == 0 || i == 6) {
		console.log("%c%s", "font-weight: bold", week[i]);
	}
	else if (i == today) {
		console.log("%c%s", "font-style: italic", week[i]);
	}
	else {
		console.log(week[i]);
	}

}

// Advanced task

arr = []

function randomInteger(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
 }

 for (let i = 7; i--;) {
 	arr.push(randomInteger(1000, 10000) + "");
 }

 for (let i = 0, len = arr.length; i < len; i++) {
 	if ( arr[i].startsWith("3") || arr[i].startsWith("7") ) {
 		console.log(arr[i]);
 	}
 }
