function form () {
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
			}
		});
	}

	ajaxForm(form);


	// Second Form

	let feedbackForm = document.getElementById('form'),
			feedbackInput = feedbackForm.getElementsByTagName('input');

	ajaxForm(feedbackForm);
}


module.exports = form;