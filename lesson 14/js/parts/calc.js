function calc () {
	let persons = document.getElementsByClassName('counter-block-input')[0],
			restDays = document.getElementsByClassName('counter-block-input')[1],
			place = document.getElementById('select'),
			totalValue = document.getElementById('total'),
			personsSum = 0,
			daysSum = 0,
			total = 0;

	totalValue.innerHTML = total;
	persons.value = "";
	restDays.value = "";

	persons.addEventListener('change', function() {
		personsSum = +this.value;
		total = (daysSum + personsSum) * 4000;
		if (!restDays.value) {
			totalValue.innerHTML = 0;
		} else {
			totalValue.innerHTML = total * place.options[place.selectedIndex].value;
			totalValue.classList.add("shadow");
			setTimeout(function () {totalValue.classList.remove("shadow");}, 2000);
			
		}
	});

	restDays.addEventListener('change', function() {
		daysSum = +this.value;
		total = (daysSum + personsSum) * 4000;
		if (!persons.value) {
			totalValue.innerHTML = 0;
		} else {
			totalValue.innerHTML = total * place.options[place.selectedIndex].value;
			totalValue.classList.add("shadow");
			setTimeout(function () {totalValue.classList.remove("shadow");}, 2000);
			
		}
	});

	place.addEventListener('change', function() {
		if (!restDays.value || !persons.value) {
			totalValue.innerHTML = 0;
		} else {
			let a = total;
			totalValue.innerHTML = a * this.options[this.selectedIndex].value;
			totalValue.classList.add("shadow");
			setTimeout(function () {totalValue.classList.remove("shadow");}, 2000);
			
		}
	});
}

module.exports = calc;