function tab() {
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
	};

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

	for (let i = 0, len = tabContent.length; i < len; i++) {
		let btn = tabContent[i].querySelector('.description-btn');
		btn.addEventListener('click', function() {
			this.classList.add('more-splash');
			overlay.style.display = 'block';
			document.body.style.overflow = 'hidden';
		});
	}
}

module.exports = tab;