window.addEventListener('DOMContentLoaded', function() {

	let tab = document.getElementsByClassName('info-header-tab'),
			tabContent = document.getElementsByClassName('info-tabcontent'),
			info = document.getElementsByClassName('info-header')[0];

	function hideTabContent(a) {
		for (let i = a, len = tabContent.length; i < len; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	}

	hideTabContent(1);

	let showTabContent = (b) => {
		if (tabContent[b].classList.contains('hide')) {
			hideTabContent(0);
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	}

	info.addEventListener('click', (event) => {
		let target = event.target;
		if (target.className == 'info-header-tab') {
			for (let i = 0, tabLen = tab.length; i < tabLen; i++) {
				if (target == tab[i]) {
					showTabContent(i);
					break;
				}
			}
		}
	});

// Timer
let deadline = '2019-07-09';

function getTimeRemaining(endtime) {
	let t = Date.parse(endtime) - Date.parse(new Date());

	if (t < 0) t = 0;

	let	seconds = pad( Math.floor( (t / 1000) % 60 ) ),
			minutes = pad( Math.floor( (t / 1000 / 60) % 60 ) ),
			hours = pad( Math.floor( t/(1000*60*60) ) );

			return {
				'total': t,
				'hours': hours,
				'minutes': minutes,
				'seconds': seconds
			};
};

let pad = (n) => (n < 10 ? '0' : '') + n;

function setClock(id, endtime) {

	let timer = document.getElementById(id),
			hours = timer.querySelector('.hours'),
			minutes = timer.querySelector('.minutes'),
			seconds = timer.querySelector('.seconds');

			let updateClock = () => {
				let t = getTimeRemaining(endtime);
				hours.innerHTML = t.hours;
				minutes.innerHTML = t.minutes;
				seconds.innerHTML = t.seconds;

				if (t.total < 0) {
					clearInterval(timeInterval);
				};

			};

			updateClock();
			let timeInterval = setInterval(updateClock, 1000);

};

setClock('timer', deadline);

// smooth scrolling
const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
      V = 0.7,
      headerHeight = document.getElementsByTagName('header')[0].clientHeight;

anchors.forEach((item) => {

  item.addEventListener('click', (e) => {
    e.preventDefault();

    let w = window.pageYOffset,  
        hash = item.getAttribute('href');
    
    let coordY = document.querySelector(hash).getBoundingClientRect().top - headerHeight,
    		start = null;

    requestAnimationFrame(step);
    
    function step(time) {
      if (start === null) start = time;
      let progress = time - start,
          r = (coordY < 0 ? Math.max(w - progress/V, w + coordY ) : Math.min(w + progress/V, w + coordY));
      window.scrollTo(0,r);
      if (r != w + coordY) {
          requestAnimationFrame(step)
      } else {
          location.hash = hash;  // URL с хэшем
      }
    }
    
  });
});

// Modal
let more = document.querySelector('.more'),
		overlay = document.querySelector('.overlay'),
		close = document.querySelector('.popup-close');

more.addEventListener('click', function() {
	this.classList.add('more-splash');
	overlay.style.display = 'block';
	document.body.style.overflow = 'hidden';
});

close.addEventListener('click', () => {
	overlay.style.display = 'none';
	more.classList.remove('more-splash');
	document.body.style.overflow = '';
});


for (let i = 0, len = tabContent.length; i < len; i++) {
	let btn = tabContent[i].querySelector('.description-btn');
	btn.addEventListener('click', function() {
		this.classList.add('more-splash');
		overlay.style.display = 'block';
		document.body.style.overflow = 'hidden';
	});
};

// Form

let message = new Object();
message.loading = "Загрузка...";
message.succes = '<p>Спасибо! Скоро мы с вами свяжемся</p>';
message.failure = "Что-то пошло не так...";

let form = document.getElementsByClassName('main-form')[0],
		input = form.getElementsByTagName('input'),
		statusMessage = document.createElement('div'),
		succesSvg = document.createElement('img');

statusMessage.classList.add('status');
succesSvg.src = "img/checked.svg";
succesSvg.width = "30";
succesSvg.height = "30";

function ajaxForm(form) {
	form.addEventListener('submit', (event) => {
		event.preventDefault();
		form.appendChild(statusMessage);

		// AJAX
		let request = new XMLHttpRequest();

		request.open("POST", "server.php");

		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

		let formData = new FormData(form);

		request.send(formData);

		request.onreadystatechange = () => {
			if (request.readyState < 4) {
				statusMessage.innerHTML = message.loading;
			} else if (request.readyState === 4) {
				if (request.status == 200 && request.status < 300) {
					statusMessage.innerHTML = message.succes;
					statusMessage.appendChild(succesSvg);
						// Добавляем контент на страницу
				}
				else {
						statusMessage.innerHTML = message.failure;
				}
			}
		};

		for (let i = 0, len = input.length; i < len; i++) {
			input[i].value = '';
			// очищаем поля ввода
		};
	});
}

ajaxForm(form);


// Second Form

let feedbackForm = document.getElementById('form'),
		feedbackInput = feedbackForm.getElementsByTagName('input');

ajaxForm(feedbackForm);

});
