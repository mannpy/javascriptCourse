window.addEventListener('DOMContentLoaded', function() {

	let tab = require('../parts/tab.js');
	let modal = require('../parts/modal.js');
	let form = require('../parts/form.js');
	let calc = require('../parts/calc.js');
	let slider = require('../parts/slider.js');
	let smoothScroll = require('../parts/smooth-scroll.js');
	let timer = require('../parts/timer.js');

	tab();
	modal();
	form();
	calc();
	slider();
	smoothScroll();
	timer();

});