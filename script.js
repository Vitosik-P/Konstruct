let navBtn = document.querySelector('.nav__btn');
let nav = document.querySelector('.nav__item_list');
let navBg = document.querySelector('.nav__bg');

navBtn.addEventListener('click', function(){
	navBtn.classList.toggle('nav__btn-active');
	nav.classList.toggle('nav__item_list-active');
    navBg.classList.toggle('nav__bg-active');
});

nav.addEventListener('click', function(){
	navBtn.classList.toggle('nav__btn-active');
	nav.classList.toggle('nav__item_list-active');
    navBg.classList.toggle('nav__bg-active');
})