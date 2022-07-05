import './style.scss';

const butons = document.querySelectorAll('.step__icon');
console.log(butons);

butons.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('step__icon_activ');
    const parent = item.parentNode;
    const parentNext = (parent as HTMLElement).nextElementSibling;
    const p = (parentNext as HTMLElement).querySelector('.step-container_hide');
    (parentNext as HTMLElement).classList.toggle('step-container_hide_activ');
  })
})
