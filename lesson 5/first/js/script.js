let menu = document.querySelector('.menu'),
		menuItem = document.getElementsByClassName('menu-item'),
		secondColumn = document.querySelectorAll('.column')[1],
		title = document.querySelector('.title'),
		adv = document.querySelector('.adv'),
		promptBlock = document.getElementById('prompt');


menu.insertBefore(menuItem[2], menuItem[1]);

fifthMenuItem = document.createElement('li');
fifthMenuItem.classList.add('menu-item');
fifthMenuItem.textContent = 'Пятый пункт';

menu.appendChild(fifthMenuItem);


document.body.style.background = 'url(img/apple_true.jpg) center no-repeat';


title.textContent = 'Мы продаем только подлинную технику Apple';


secondColumn.removeChild(adv);


promptBlock.textContent = prompt('Как вы относитесь к технике Apple?', 'Хорошо)');

