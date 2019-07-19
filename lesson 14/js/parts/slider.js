function slider () {
	// Slider
	let slideIndex = 1,
			slides = document.getElementsByClassName('slider-item'),
			prev = document.querySelector('.prev'),
			next = document.querySelector('.next'),
			dotsWrap = document.querySelector('.slider-dots'),
			dots = dotsWrap.getElementsByClassName('dot');

	showSlides(slideIndex);

	function showSlides(n) {
		if (n > slides.length) {
			slideIndex = 1;
		}

		if (n < 1) {
			slideIndex = slides.length;
		}

		for (let i = 0, len = slides.length; i < len; i++) {
			slides[i].style.display = "none";
			slides[i].style.overflow = 'hidden';
		}

		for (let i = 0, len = dots.length; i < len; i++) {
			dots[i].classList.remove('dot-active');
		}

		slides[slideIndex - 1].style.display = "block";
		dots[slideIndex - 1].classList.add('dot-active');
	}

	function plusSlides(n) {
		showSlides(slideIndex += n);
	}

	function currentSlide(n) {
		showSlides(slideIndex = n);
	}

	prev.addEventListener('click', () => {
		plusSlides(-1);
		let n = slideIndex;

		if (n > slides.length) {
			n = 1;
		}

		if (n < 1) {
			n = slides.length;
		}

		for (let i = 0, len = slides.length; i < len; i++) {
			slides[i].querySelector('img').classList.remove('slide-left', 'slide-right');
		}
		
		slides[n-1].querySelector('img').classList.add('slide-left');
	});

	next.addEventListener('click', () => {
		plusSlides(1);
		let n = slideIndex;

		if (n > slides.length) {
			n = 1;
		}

		if (n < 1) {
			n = slides.length;
		}

		for (let i = 0, len = slides.length; i < len; i++) {
			slides[i].querySelector('img').classList.remove('slide-left', 'slide-right');
		}
		
		slides[n-1].querySelector('img').classList.add('slide-right');
	});

	dotsWrap.addEventListener('click', (event) => {
		for (let i = 0, len = dots.length + 1; i < len; i++) {
			if ( event.target.classList.contains('dot') && event.target == dots[i - 1] ) {
				currentSlide(i);
			}
		}
	});
}

module.exports = slider;