$(document).ready(() => {
	let overlay = $(".overlay"),
			modal = $(".modal"),
			btns = $('.main_btn, .close, a[href$="sheldure"]');

	btns.on("click", () => {
		overlay.fadeToggle();
		modal.animate(
		{
	    opacity: "toggle",
	    height: "toggle"
  	},
		{
	    duration: 1200, 
	    specialEasing: {
	      opacity: 'linear',
	      height: 'swing'
	    }
  	});

	});

	// form
	$(".form").submit((e) => {
		e.preventDefault();
		let $form = $(this),
				url = "server.php";
		$.ajax({
			type: "POST",
			url: url,
			data: $form.serialize(),
			success: function(data) {
        $(".form").append('<div>Спасибо</div>');
        },
      error: function(xhr, str) {
	    	alert('Возникла ошибка: ' + xhr.responseCode);
      }
		});
	});

});
