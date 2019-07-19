function smoothScroll() {
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
	          requestAnimationFrame(step);
	      } else {
	          location.hash = hash;  // URL с хэшем
	      }
	    }
	    
	  });
	});
}

module.exports = smoothScroll;