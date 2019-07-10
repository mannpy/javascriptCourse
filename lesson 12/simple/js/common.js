$(document).ready(function() {
	let overlay = $(".overlay"),
			modal = $(".modal"),
			btns = $('.main_btn, .close, a[href$="sheldure"]');

	btns.on("click", () => {
		overlay.fadeToggle();
		modal.slideToggle();
	});

});
