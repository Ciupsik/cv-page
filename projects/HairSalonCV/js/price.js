

function headerMobileHandler() {

  const header = document.querySelector('.header');

  const menuBars = document.querySelector('.header .menu-bars');
  const menuX = document.querySelector('.header .menu-x');

  const mobileBtns = document.querySelectorAll('.header .overlay-nav a');


  menuBars.addEventListener('click', () => {
    header.classList.add('mobile-active')
  })


  menuX.addEventListener('click', () => {
    header.classList.remove('mobile-active')
  })


  mobileBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      header.classList.remove('mobile-active')
    })
  })


  window.addEventListener('resize', () => {
    if (window.innerWidth >= 825) {
      header.classList.remove('mobile-active')
    }
  })


  if (window.innerWidth >= 825) {
    header.classList.remove('mobile-active')
  }


}



headerMobileHandler()