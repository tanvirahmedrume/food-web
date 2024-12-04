const navOpen = document.querySelector('.navOpen');
const navClose = document.querySelector('.navClose');
const navShow = document.querySelector('.navShow');
const hideLogo = document.querySelector('.hideLogo');
const hiddenSearch = document.querySelector('.hiddenSearch');


navOpen.addEventListener('click', ()=>{
    navClose.classList.remove('hidden');
    navShow.classList.remove('hidden');
    navOpen.classList.add('hidden');
    hideLogo.classList.add('hideLogo');
    hiddenSearch.classList.add('hiddenSearch');
});
navClose.addEventListener('click', ()=>{
    navClose.classList.add('hidden');
    navShow.classList.add('hidden');
    navOpen.classList.remove('hidden');
    hideLogo.classList.remove('hideLogo');
    hiddenSearch.classList.remove('hiddenSearch');
});