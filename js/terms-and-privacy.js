



function mobileNavDisplay() {

  const navBars = document.querySelector('.header .menu-bars');
  const navX = document.querySelector('.header .menu-x');

  const mobileBtns = document.querySelectorAll('.header .mobile-nav li');

  const header = document.querySelector('.header')


  navBars.addEventListener('click', () => {
    header.classList.add('mobile-active')
  })
  
  navX.addEventListener('click', () => {
    header.classList.remove('mobile-active')
  })


  window.addEventListener('resize', () => {
    if (window.innerWidth >= 725) {
      header.classList.remove('mobile-active')
    }
  })


  mobileBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      header.classList.remove('mobile-active')
    })
  })






  if (window.innerWidth >= 725) {
    header.classList.remove('mobile-active')
  }

}


mobileNavDisplay()