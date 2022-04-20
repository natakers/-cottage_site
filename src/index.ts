import './style.scss';

const butons = document.querySelectorAll('.step__icon');
console.log(butons);

butons.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('activ');
    const p = item.nextSibling
  })
})
function activ() {
  
    
};
