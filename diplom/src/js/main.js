import {show, hide, addSliderElements, removeSliderElements} from './modules/helpers';
import elections from './modules/objects';
import createSlider from './modules/slider';

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
        

  elections.person.skin = document.querySelector('.person-skin');
  elections.person.hair = document.querySelector('.person-hair');
  elections.person.clothes = document.querySelector('.person-clothes');
 
  function changePicsInit(sex) {
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
    elections.person.sex = checkedSex.value;
    addSliderElements(elections.sliders.hair.block, checkedSex.value, 'hair-style hair-style-');
    elections.sliders.hair.slides = document.querySelectorAll('.hair .hair-style');
    
    addSliderElements(elections.sliders.clothes.block, checkedSex.value, 'clothes-style clothes-style-');
    elections.sliders.clothes.slides = document.querySelectorAll('.clothes .clothes-style');
    
    elections.sliders.hair.slides[0].style.display = "block";
    elections.sliders.clothes.slides[0].style.display = "block";

    changePicsInit(checkedSex.value);

    createSlider(elections.sliders);
  }
  
  slider();

  function changeBody (sex) {
    sex.forEach((elem) => {
      elem.addEventListener('change', () => {
        removeSliderElements(elections.sliders.hair.block, 'hair-style');
        removeSliderElements(elections.sliders.clothes.block, 'clothes-style');
        if (elem.checked) {
          elections.person.sex = elem.value;

          addSliderElements(elections.sliders.hair.block, elem.value, 'hair-style hair-style-');
          addSliderElements(elections.sliders.clothes.block, elem.value, 'clothes-style clothes-style-');
          if (elem.value == "Мужской") {
            elections.sliders.hair.slides = document.querySelectorAll('.hair .hair-style');
            elections.sliders.hair.slides[0].style.display = "block";

            elections.sliders.clothes.slides = document.querySelectorAll('.clothes .clothes-style');
            elections.sliders.clothes.slides[0].style.display = "block";
          } else if (elem.value == "Женский") {
            elections.sliders.hair.slides = document.querySelectorAll('.hair .hair-style');
            elections.sliders.hair.slides[0].style.display = "block";
            
            elections.sliders.clothes.slides = document.querySelectorAll('.clothes .clothes-style');
            elections.sliders.clothes.slides[0].style.display = "block";
            
          }
          changePicsInit(elem.value);
        } 
      });
    });

    // change skin
    elections.sliders.skin.prevBtn.addEventListener('click', () => {
      if (elections.person.sex == "Мужской") {
        elections.person.skin.style.background = elections.pictures.skin.men[elections.sliders.skin.currentIndex - 1];
      } else if (elections.person.sex == "Женский") {
        elections.person.skin.style.background = elections.pictures.skin.women[elections.sliders.skin.currentIndex - 1];
      }
    });
    elections.sliders.skin.nextBtn.addEventListener('click', () => {
      if (elections.person.sex == "Мужской") {
        elections.person.skin.style.background = elections.pictures.skin.men[elections.sliders.skin.currentIndex - 1];
      } else if (elections.person.sex == "Женский") {
        elections.person.skin.style.background = elections.pictures.skin.women[elections.sliders.skin.currentIndex - 1];
      }
    });

    // change hair
    elections.sliders.hair.prevBtn.addEventListener('click', () => {
      if (elections.person.sex == "Мужской") {
        elections.person.hair.style.background = elections.pictures.hair.men[elections.sliders.hair.currentIndex - 1];
      } else if (elections.person.sex == "Женский") {
        elections.person.hair.style.background = elections.pictures.hair.women[elections.sliders.hair.currentIndex - 1];
      }
    });
    elections.sliders.hair.nextBtn.addEventListener('click', () => {
      if (elections.person.sex == "Мужской") {
        elections.person.hair.style.background = elections.pictures.hair.men[elections.sliders.hair.currentIndex - 1];
      } else if (elections.person.sex == "Женский") {
        elections.person.hair.style.background = elections.pictures.hair.women[elections.sliders.hair.currentIndex - 1];
      }
    });

    // change clothes
    elections.sliders.clothes.prevBtn.addEventListener('click', () => {
      if (elections.person.sex == "Мужской") {
        elections.person.clothes.style.background = elections.pictures.clothes.men[elections.sliders.clothes.currentIndex - 1];
      } else if (elections.person.sex == "Женский") {
        elections.person.clothes.style.background = elections.pictures.clothes.women[elections.sliders.clothes.currentIndex - 1];
      }
    });
    elections.sliders.clothes.nextBtn.addEventListener('click', () => {
      if (elections.person.sex == "Мужской") {
        elections.person.clothes.style.background = elections.pictures.clothes.men[elections.sliders.clothes.currentIndex - 1];
      } else if (elections.person.sex == "Женский") {
        elections.person.clothes.style.background = elections.pictures.clothes.women[elections.sliders.clothes.currentIndex - 1];
      }
    });

  }

  changeBody(sex);

  function createCandidateCard() {
    for (let elem of mainCards.children) {
      elem.classList.remove('main-cards-item-active');
    };

    elections.person.name = name.value;
    elections.person.age = +age.value;
    elections.person.select = select.value;
    elections.person.bio = bio.value;

    let firstCandidate = mainCards.children[0];
    
    firstCandidate.insertAdjacentHTML('afterend', 
    `<div class="main-cards-item main-cards-item-active">
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

    // central card
    const person = mainBlock.querySelector('.person'),
    personSkin = person.querySelector('.person-skin'),
    personClothes = person.querySelector('.person-clothes'),
    personHair = person.querySelector('.person-hair');

    personSkin.style.background = elections.person.skin.style.background;
    personClothes.style.background = elections.person.hair.style.background;
    personHair.style.background = elections.person.clothes.style.background;

    let resultCount = document.querySelectorAll('.result-count'),
        progressBar = document.querySelectorAll('.progress-bar');
    
    resultCount.forEach((elem) => elem.textContent = "0%");
    progressBar.forEach((elem) => elem.style.height = 0);
  }

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
    hide(customBlock);
    show(mainBlock);
    createCandidateCard();
    mainBlock.classList.add('animated', 'fadeInDown');
  });

  resetBtn.addEventListener('click', () => {
    let card = document.querySelector('.main-cards-item-active');
    card.parentNode.removeChild(card);
    hide(mainBlock);
    show(customBlock, 'flex');
  });
});