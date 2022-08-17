import './style.scss';
import './burger';
import './slick/slick.js';
const $ = require('jquery');

$(document).ready(function(){
  $('.fifth__slider').slick({
    responsive: true,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
  })
});


const butons = document.querySelectorAll('.step__icon');
butons.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('step__icon_activ');
    const parent = item.parentNode;
    const parentNext = (parent as HTMLElement).nextElementSibling;
    const p = (parentNext as HTMLElement).querySelector('.step-container_hide');
    (parentNext as HTMLElement).classList.toggle('step-container_hide_activ');
  })
})
