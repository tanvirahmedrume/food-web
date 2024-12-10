const navOpen = document.querySelector('.navOpen');
const navClose = document.querySelector('.navClose');
const navShow = document.querySelector('.navShow');
const hideLogo = document.querySelector('.hideLogo');
const hiddenSearch = document.querySelector('.hiddenSearch');
// JavaScript for toggling search popup
const searchPopup = document.querySelector('.searchPopup');
const pageContent = document.querySelector('.pageContent');
const openSearch = document.querySelector('.openSearch');
const closeSearch = document.querySelector('.closeSearch');
const womanImage = document.querySelector('.womanImage');
const body = document.body;


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

// Open search
openSearch.addEventListener('click', () =>{
  searchPopup.classList.remove('hidden');
  pageContent.classList.add('blur-sm');
  womanImage.classList.remove('relative');
  body.classList.add('overflow-hidden'); // Disable scrolling
});

// Close search
closeSearch.addEventListener('click', () => {
  searchPopup.classList.add('hidden');
  pageContent.classList.remove('blur-sm');
  womanImage.classList.add('relative');
  body.classList.remove('overflow-hidden'); // Enable scrolling
});
