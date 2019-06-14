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
	discount: false,
	shopItems: [],
	chooseGoods: function() {
			for (let i = 3; i--;) {
				let a = prompt("Какой тип товаров будем продавать?", "Рыба");
				if (a && typeof(a) === "string" && typeof(a) !== null && a.length < 50) {
					console.log("Все верно!");
					mainList.shopGoods[i] = a;
				}	
			}
		},

	workTime: function(time) {
			if (time < 0) {console.log("Такого не может быть!");}
			else if (time > 0 && time < 20) {console.log("Время работать!"); mainList.open = true}
			else if (time < 24) {console.log("Уже слишком поздно!");}
			else {console.log("В сутках только 24 часа!");}
		},

	dailyBudjet: function(budjet) {
			console.log("Ежедневный бюджет: " + budjet / 30);
		},

	makeDiscount: function(price, discount) {
			return discount ? Math.round(price * 0.8) : price;
		},

	hireEmployers: function() {
			for (let i = 1; i < 5; i++) {
				let name = prompt('Имя сотрудника?', "Антон");
				mainList.employers[i] = name;
			}
		},

	chooseShopItems: function() {
		let items = prompt("Перечислите через запятую вашу товары", "");
		if (items && typeof(items) === "string" && typeof(items) !== null) {
			mainList.shopItems = items.split(",");
		}
		items = prompt("Подождите, еще ", "");
		if (items && typeof(items) === "string" && typeof(items) !== null) {
			mainList.shopItems.push(items);
		}
		mainList.shopItems.sort();
	}


	};



console.log(mainList);

mainList.chooseShopItems();

if (mainList.shopItems.length > 0) {
	console.log("У нас вы можете купить: ");
	mainList.shopItems.forEach( function(element, index) {
		console.log(String(index + 1), ": ", element);
	});

	console.log("Наш магазин включает в себя: ");
	for (key in mainList.shopItems) {
		console.log(mainList.shopItems[key]);
	}
}

