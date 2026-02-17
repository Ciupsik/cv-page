


function portfolioScroller() {

  const scroller = document.querySelector('.portfolio .scroller');
  const arwLeft = document.querySelector('.portfolio .nav-left');
  const arwRight = document.querySelector('.portfolio .nav-right');


  arwLeft.addEventListener('click', () => {
    scroller.scrollBy({
      left: -1,
      behavior: 'smooth'
    })
  })

  arwRight.addEventListener('click', () => {
    scroller.scrollBy({
      left: 1,
      behavior: 'smooth'
    })
  })


}


portfolioScroller()







function barsChange() {

  const navBars = document.querySelector('.header .bars-btn')
  const navX = document.querySelector('.header .x-btn')

  const mobileNav = document.querySelector('.header .mobile-nav')
  const desktopNav = document.querySelector('.header .desktop-nav')

  const header = document.querySelector('.header')


  navBars.addEventListener('click', () => {
    header.classList.add('nav-open')
  })

  navX.addEventListener('click', () => {
    header.classList.remove('nav-open')
  }) 


  window.addEventListener('resize', () => {
    if (window.innerWidth >= 725) {
      header.classList.remove('nav-open')
    }
  })


}


barsChange()