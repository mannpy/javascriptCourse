import {show, hide} from './modules/helpers'

const main = document.querySelector('.main'),
      overlay = document.querySelector('.overlay'),
      custom = document.querySelector('.custom'),
      popupBtn = document.querySelector('.popup-btn'),
      customInfo = custom.querySelector('.custom-info'),
      customChair = custom.querySelector('.custom-char'),
      customStyle = custom.querySelector('.custom-style');

popupBtn.addEventListener('click', () => {
  for (let elem of [main, overlay, custom]) {
    hide(elem);
  }
  
  show(custom, 'flex');

  for (let elem of [customInfo, customChair, customStyle]) {
    show(elem);
  }
});
