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
		btns = document.getElementsByTagName('button'),
		chooseItem = document.querySelector('.choose-item'),
		timeValue = document.querySelector('.time-value'),
		countBudgetValue = document.querySelector('.count-budget-value'),
		hireEmployersItem  = document.querySelectorAll('.hire-employers-item');

btns = Array.from(btns).slice(1);

openBtn.style.backgroundColor = 'orange';

name.style.backgroundColor = '#e8f5e9';
budget.style.backgroundColor = '#e8f5e9';
goods.style.backgroundColor = '#e8f5e9';
items.style.backgroundColor = '#e8f5e9';
employers.style.backgroundColor = '#e8f5e9';
discount.style.backgroundColor = '#e8f5e9';
isopen.style.backgroundColor = '#e8f5e9';

discountValue.style.backgroundColor = 'purple';
isopenValue.style.backgroundColor = 'purple';

btns.forEach(function(btn) {
	btn.style.backgroundColor = '#00e676';
	btn.style.height = '2em';
	btn.style.border = 'none';
})

document.body.style.fontSize = '20px';
document.body.style.color = '#282830';

chooseItem.style.backgroundColor = '#b2ebf2';
timeValue.style.backgroundColor = '#b2ebf2';
countBudgetValue.style.backgroundColor = '#b2ebf2';
hireEmployersItem.forEach(function(item) {
	item.style.backgroundColor = '#9fa8da';
});

for (let i = 0, len = goodsItem.length; i < len; i++) {
	goodsItem[i].style.backgroundColor = '#ffcdd2';
}