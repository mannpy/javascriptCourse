let openBtn = document.getElementById('open-btn'),
		name = document.getElementsByClassName('name')[0],
		nameValue = document.getElementsByClassName('name-value')[0],
		budget = document.getElementsByClassName('budget')[0],
		budgetValue = document.getElementsByClassName('budget-value')[0],
		goods = document.getElementsByClassName('goods')[0],
		goodsValue = document.getElementsByClassName('goods-value')[0],
		items = document.getElementsByClassName('items')[0],
		itemsValue = document.getElementsByClassName('items-value')[0],
		employers = document.getElementsByClassName('employers')[0],
		employersValue = document.getElementsByClassName('employers-value')[0],
		discount = document.getElementsByClassName('discount')[0],
		discountValue = document.getElementsByClassName('discount-value')[0],
		isopen = document.getElementsByClassName('isopen')[0],
		isopenValue = document.getElementsByClassName('isopen-value')[0],
		goodsItem = document.getElementsByClassName('goods-item'),
		goodsBtn = document.getElementsByTagName('button')[1],
		budgetBtn = document.getElementsByTagName('button')[2],
		employersBtn = document.getElementsByTagName('button')[3],
		chooseItem = document.querySelector('.choose-item'),
		timeValue = document.querySelector('.time-value'),
		countBudgetValue = document.querySelector('.count-budget-value'),
		hireEmployersItem  = document.querySelectorAll('.hire-employers-item');


let money,
		price;

openBtn.addEventListener('click', () => {
	do {
		money = prompt('Ваш бюджет?', 30000);
	}
	while (isNaN(money) || money == "" || money == null)

	budgetValue.textContent = money;

	nameValue.textContent = prompt('Название вашего магазина?', 'SuperShop').toUpperCase();

});

goodsBtn.addEventListener('click', () => {
	for (let i = 0, len = goodsItem.length; i < len; i++) {
		let a = goodsItem[i].value

		if (typeof(a) === "string" && typeof(a) !== null && a.length < 50) {
			console.log("Все верно!");
			mainList.shopGoods[i] = a;
			goodsValue.textContent = mainList.shopGoods;
		}	else {
			i--;
		}
	}

});

chooseItem.addEventListener('change', () => {
	let items = chooseItem.value;
	if (items && isNaN(items)) {
		mainList.shopItems = items.split(",");
		mainList.shopItems.sort();

		itemsValue.textContent = mainList.shopItems;
	}
});

timeValue.addEventListener('change', () => {
	let time = timeValue.value;
	if (time < 0) {
		console.log("Такого не может быть!");
		mainList.open = false;
	}
	else if (time >= 8 && time < 20) {
		console.log("Время работать!"); 
		mainList.open = true}
	else if (time < 24) {
		console.log("Уже слишком поздно!");
		mainList.open = false;
	}
	else {
		console.log("В сутках только 24 часа!");
		mainList.open = false;
	};

	if (mainList.open) {
		isopenValue.style.backgroundColor = 'green';
	} else {
		isopenValue.style.backgroundColor = 'red';
	};

});

budgetBtn.addEventListener('click', () => {
	countBudgetValue.value = money / 30;
});

employersBtn.addEventListener('click', () => {
	for (let i = 0, len = hireEmployersItem.length; i < len; i++) {
		let name = hireEmployersItem[i].value;
		mainList.employers[i] = name;
		employersValue.textContent += name + ', ';
	};
	employersValue.textContent = employersValue.textContent.slice(0, -2);

});


const mainList = {
	budjet: money,
	shopName: name,
	shopGoods: [],
	employers: {},
	open: false,
	discount: false,
	shopItems: [],

	makeDiscount: function(price, discount) {
			return discount ? Math.round(price * 0.8) : price;
		}
	};

/* Styles */

openBtn.style.backgroundColor = 'orange';

name.style.backgroundColor = '#e8f5e9';
budget.style.backgroundColor = '#e8f5e9';
goods.style.backgroundColor = '#e8f5e9';
items.style.backgroundColor = '#e8f5e9';
employers.style.backgroundColor = '#e8f5e9';
discount.style.backgroundColor = '#e8f5e9';
isopen.style.backgroundColor = '#e8f5e9';

discountValue.style.backgroundColor = 'purple';

document.body.style.fontSize = '20px';
document.body.style.color = '#282830';

chooseItem.style.backgroundColor = '#b2ebf2';
timeValue.style.backgroundColor = '#b2ebf2';
countBudgetValue.style.backgroundColor = '#b2ebf2';
hireEmployersItem.forEach(function(item) {
	item.style.backgroundColor = '#9fa8da';
});

/* Styles end */

for (let i = 0, len = goodsItem.length; i < len; i++) {
	goodsItem[i].style.backgroundColor = '#ffcdd2';
}