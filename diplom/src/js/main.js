import elections from './modules/objects';
import createSlider from './modules/slider';
import {show, hide, addSliderElements, removeSliderElements} from './modules/helpers';
import {resetResults, voting, crime} from './modules/elections';

window.addEventListener('DOMContentLoaded', function() {
  const mainBlock = document.querySelector('.main'),
        overlayBlock = document.querySelector('.overlay'),
        customBlock = document.querySelector('.custom'),
        customInfoBlock = customBlock.querySelector('.custom-info'),
        customCharBlock = customBlock.querySelector('.custom-char'),
        customStyleBlock = customBlock.querySelector('.custom-style'),
        // cards
        mainCards = mainBlock.querySelector('.main-cards'),
        // info
        name = document.getElementById('name'),
        age = document.getElementById('age'),
        sex = document.getElementsByName('sex'),
        select = document.getElementById('select'),
        bio = document.getElementById('bio'),
        // btns
        readyBtn = customCharBlock.querySelector('#ready'),
        popupBtn = document.querySelector('.popup-btn'),
        resetBtn = document.querySelector('#reset'),
        votingBtn = document.querySelector('#voting'),
        crimeBtn = document.querySelector('#crime');
        
  // set person apperance
  elections.person.skin = document.querySelector('.person-skin');
  elections.person.hair = document.querySelector('.person-hair');
  elections.person.clothes = document.querySelector('.person-clothes');
 
  function changePersonAppearance(sex) {
    // change images according sex value
    if (sex == "Мужской") {
      elections.person.skin.style.background = elections.pictures.skin.men[0];
      elections.person.hair.style.background = elections.pictures.hair.men[0];
      elections.person.clothes.style.background = elections.pictures.clothes.men[0];
    } else if (sex == "Женский") {
      elections.person.skin.style.background = elections.pictures.skin.women[0];
      elections.person.hair.style.background = elections.pictures.hair.women[0];
      elections.person.clothes.style.background = elections.pictures.clothes.women[0];
    }
  }

  function slider() {
    let checkedSex = document.querySelector('input[name=sex]:checked');
    // update value
    elections.person.sex = checkedSex.value;
    // hair
    addSliderElements(elections.sliders.hair.block, checkedSex.value, 'hair-style hair-style-');
    elections.sliders.hair.slides = document.querySelectorAll('.hair .hair-style');
    // clothes
    addSliderElements(elections.sliders.clothes.block, checkedSex.value, 'clothes-style clothes-style-');
    elections.sliders.clothes.slides = document.querySelectorAll('.clothes .clothes-style');
    // show first slide
    elections.sliders.hair.slides[0].style.display = "block";
    elections.sliders.clothes.slides[0].style.display = "block";

    // change img if sex changed
    changePersonAppearance(checkedSex.value);
    // activate slider
    createSlider(elections.sliders);
  }
  

  function changeBody () {
    /* listen sex value changing */
    sex.forEach((elem) => {
      elem.addEventListener('change', () => {
        // first remove all slides
        removeSliderElements(elections.sliders.hair.block, 'hair-style');
        removeSliderElements(elections.sliders.clothes.block, 'clothes-style');
        if (elem.checked) {
          elections.person.sex = elem.value;
          // add new slides according sex value
          addSliderElements(elections.sliders.hair.block, elem.value, 'hair-style hair-style-');
          addSliderElements(elections.sliders.clothes.block, elem.value, 'clothes-style clothes-style-');
          // update slides array to work slider
          elections.sliders.hair.slides = document.querySelectorAll('.hair .hair-style');
          elections.sliders.clothes.slides = document.querySelectorAll('.clothes .clothes-style');
          // show first slide
          elections.sliders.hair.slides[0].style.display = "block";
          elections.sliders.clothes.slides[0].style.display = "block";
          changePersonAppearance(elem.value);
        } 
      });
    });

    /* listen buttons clicking */
    // change skin
    for (let btn of [elections.sliders.skin.prevBtn, elections.sliders.skin.nextBtn]) {
      btn.addEventListener('click', () => {
        if (elections.person.sex == "Мужской") {
          elections.person.skin.style.background = elections.pictures.skin.men[elections.sliders.skin.currentIndex - 1];
        } else if (elections.person.sex == "Женский") {
          elections.person.skin.style.background = elections.pictures.skin.women[elections.sliders.skin.currentIndex - 1];
        }
      });
    }

    // change hair
    for (let btn of [elections.sliders.hair.prevBtn, elections.sliders.hair.nextBtn]) {
      btn.addEventListener('click', () => {
        if (elections.person.sex == "Мужской") {
          elections.person.hair.style.background = elections.pictures.hair.men[elections.sliders.hair.currentIndex - 1];
        } else if (elections.person.sex == "Женский") {
          elections.person.hair.style.background = elections.pictures.hair.women[elections.sliders.hair.currentIndex - 1];
        }
      });
    }
    
    // change clothes
    for (let btn of [elections.sliders.clothes.prevBtn, elections.sliders.clothes.nextBtn]) {
      btn.addEventListener('click', () => {
        if (elections.person.sex == "Мужской") {
          elections.person.clothes.style.background = elections.pictures.clothes.men[elections.sliders.clothes.currentIndex - 1];
        } else if (elections.person.sex == "Женский") {
          elections.person.clothes.style.background = elections.pictures.clothes.women[elections.sliders.clothes.currentIndex - 1];
        }
      });
    }
    
  }

  function createNewCandidateCard() {
    // remove active main card
    for (let elem of mainCards.children) {
      elem.classList.remove('main-cards-item-active');
    };

    elections.person.name = name.value;
    elections.person.age = +age.value;
    elections.person.select = select.value;
    elections.person.bio = bio.value;

    let firstCandidate = mainCards.children[0];
    
    firstCandidate.insertAdjacentHTML('afterend', 
    `<div class="main-cards-item">
      <div class="candidate-block">
          <div class="person consruct">
            <div id="person-skin" class="person-skin"></div>
            <div id="person-clothes" class="person-clothes"></div>
            <div id="person-hair" class="person-hair"></div>
            <div class="person-shoes"></div>
          </div>
        <div class="result">
          <div class="result-count">0%</div>
          <div class="progress">
            <div class="progress-bar progress-bar-3"></div>
          </div>
        </div>
      </div>
      <div class="name">${elections.person.name}</div>
      <div class="age">${elections.person.age} лет</div>
      Пол:
      <div class="sex">${elections.person.sex}</div>
      Полит. взгляды:
      <div class="views">${elections.person.select}</div>
      Биография
      <div class="bio">${elections.person.bio}</div>
    </div>`);

    // get person node and change appearance
    const person = mainBlock.querySelector('.person'),
    personSkin = person.querySelector('.person-skin'),
    personClothes = person.querySelector('.person-clothes'),
    personHair = person.querySelector('.person-hair');

    personSkin.style.background = elections.person.skin.style.background;
    personClothes.style.background = elections.person.hair.style.background;
    personHair.style.background = elections.person.clothes.style.background;

    // reset all counts and progress bars
    resetResults();
    
  }


  // run slider
  slider();
  // run sex input and btns listening
  changeBody();

  /* Listen buttons clicking */
  popupBtn.addEventListener('click', () => {
    for (let elem of [mainBlock, overlayBlock]) {
      hide(elem);
    }
    
    show(customBlock, 'flex');
    customBlock.classList.add('animated', 'fadeInDown');

    for (let elem of [customInfoBlock, customCharBlock, customStyleBlock]) {
      show(elem);
    }

  });

  readyBtn.addEventListener('click', () => {
    createNewCandidateCard();

    hide(customBlock);
    show(mainBlock);
    mainBlock.classList.add('animated', 'fadeInDown');
  });

  resetBtn.addEventListener('click', () => {
    // get central custom card and remove it
    let card = document.querySelectorAll('.main-cards-item')[1];
    card.parentNode.removeChild(card);

    hide(mainBlock);
    show(customBlock, 'flex');

    // reset voting
    elections.votingHolded = false;
    elections.crimeMaked = false;
  });

  votingBtn.addEventListener('click', () => {
    elections.votingHolded = voting(elections.votingHolded);
  });

  crimeBtn.addEventListener('click', () => {
    elections.crimeMaked = crime(elections.votingHolded,
                                elections.crimeMaked);
  });
}); 