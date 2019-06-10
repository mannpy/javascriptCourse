let money = prompt('Ваш бюджет?', 30000),
	name = prompt('Название вашего магазина?', 'SuperShop'),
	mainList = {
		budjet: money,
		shopName: name,
		shopGoods: [],
		employers: {},
		open: false,
	};

/* For cycle */
for (let i = 3; i--;) {
	let a = prompt("Какой тип товаров будем продавать?", "Рыба");
	if (a && typeof(a) === "string" && typeof(a) === null && a.length < 50) {
		console.log("Все верно!");
		mainList.shopGoods[i] = a;
	}
		
}

// let i = 0;

// /* Do While cycle */

// // do {
// // 	let a = prompt("Какой тип товаров будем продавать?", "Рыба");
// // 	mainList.shopGoods[i] = a;	
// // 	i++
// // }
// // while (i < 5);

// /* While cycle */

// i = 0;

// while (i < 5) {
// 	let a = prompt("Какой тип товаров будем продавать?", "Рыба");
// 	mainList.shopGoods[i] = a;	
// 	i++
// }

console.log(mainList.budjet / 30);

console.log(mainList);