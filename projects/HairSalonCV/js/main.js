

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






















function productsScrollerHandler() {

  const arrowL = document.querySelector('.products .scroller .nav-left');
  const arrowR = document.querySelector('.products .scroller .nav-right');

  const scroller = document.querySelector('.products .scroller-inner');


  arrowL.addEventListener('click', () => {
    scroller.scrollBy({
      left: -1,
      behavior: 'smooth'
    })
  })

  arrowR.addEventListener('click', () => {
    scroller.scrollBy({
      left: 1,
      behavior: 'smooth'
    })
  })





}

productsScrollerHandler()








function mapFunctionality() {

  const mapBtns = document.querySelectorAll('.visit-us .map-container .btns button');
  const iframe = document.getElementById('mapFrame');

  mapBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      iframe.src = btn.dataset.src;

      mapBtns.forEach((btn) => {
        btn.classList.remove('active')
      })

      btn.classList.add('active')
    })
  })
}

mapFunctionality()