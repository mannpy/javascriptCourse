let budjet = prompt('Ваш бюджет?', 30000),
	shopName = prompt('', 'SuperShop'),
	mainList = {
		budjet: '',
		shopName: '',
		shopGoods: [],
		employers: {},
		open: true
	};

mainList.budjet = budjet,
mainList.shopName = shopName;

for (let i = 3; i--;) {
	mainList.shopGoods.push(
		prompt("Какой тип товаров будем продавать?", "Рыба")
	);
}

console.log(budjet / 30);