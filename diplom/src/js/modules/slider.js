function createSlider (slidersParams) {
  function nextSlide(sliderParams) {
    sliderParams.currentIndex += 1;
    showSlides(sliderParams);
  }

  function previuosSlide(sliderParams) {
    sliderParams.currentIndex -= 1;
    showSlides(sliderParams);  
  }

  function currentSlide(sliderParams) {
    showSlides(sliderParams);
  }

  function showSlides(sliderParams) {
    if (sliderParams.currentIndex > sliderParams.slides.length) {
      sliderParams.currentIndex = 1;
    }
    if (sliderParams.currentIndex < 1) {
      sliderParams.currentIndex = sliderParams.slides.length;
    }
    for (let elem of sliderParams.slides) {
        elem.style.display = "none";
    }
    sliderParams.slides[sliderParams.currentIndex - 1].style.display = "block";
  }

  for (let i in slidersParams) {
    slidersParams[i].prevBtn.addEventListener('click', () => previuosSlide(slidersParams[i]));
    slidersParams[i].nextBtn.addEventListener('click', () => nextSlide(slidersParams[i]));
  }
  
}

export default createSlider;