const burger = document.querySelector(".header__burger");
const nav = document.querySelector('.nav__list');
const navLi = document.querySelectorAll('.header__nav-link');

(burger as HTMLElement).addEventListener('click', event => {
	(burger as HTMLElement).classList.toggle("active");
	(nav as HTMLElement).classList.toggle("active");
});
navLi.forEach(item => {
	item.addEventListener('click', event => {
	  (nav as HTMLElement).classList.remove("active");
	  (burger as HTMLElement).classList.remove("active");
	});
})