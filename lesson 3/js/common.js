let money, name, time, price;

function start() {
	money = prompt('Ваш бюджет?', 30000);

	while (isNaN(money) || money == "" || money == null) {
		money = prompt('Ваш бюджет?', 30000);
	}

	name = prompt('Название вашего магазина?', 'SuperShop').toUpperCase();
	time = 21;
}

start();


let mainList = {
	budjet: money,
	shopName: name,
	shopGoods: [],
	employers: {},
	open: false,
	discount: false
	},
	employers = {};

function chooseGoods() {
	for (let i = 3; i--;) {
		let a = prompt("Какой тип товаров будем продавать?", "Рыба");
		if (a && typeof(a) === "string" && typeof(a) !== null && a.length < 50) {
			console.log("Все верно!");
			mainList.shopGoods[i] = a;
		}	
	}
}

chooseGoods();


function workTime(time) {
	if (time < 0) {console.log("Такого не может быть!");}
	else if (time > 0 && time < 20) {console.log("Время работать!");}
	else if (time < 24) {console.log("Уже слишком поздно!");}
	else {console.log("В сутках только 24 часа!");}
}

workTime();

function printDailyBudjet(budjet) {
	console.log("Ежедневный бюджет: " + budjet / 30);
}

printDailyBudjet(mainList.budjet);

function discountSystem(price, discount) {
	if (discount) return Math.round(price * 0.8);
	return price
}

console.log( discountSystem(1000, mainList.discount) );

function fillEmployers() {
	for (let i = 1; i < 5; i++) {
		let name = prompt('Ваше имя?', "Антон");
		employers[i] = name;
	}
}

fillEmployers();

console.log(mainList);

