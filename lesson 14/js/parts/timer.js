function timer() {
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
	}

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
					}

				};

				updateClock();
				let timeInterval = setInterval(updateClock, 1000);

	}

	setClock('timer', deadline);
}

module.exports = timer;