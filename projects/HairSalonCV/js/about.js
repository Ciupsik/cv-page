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







function imageZoomHandler() {

  const lightbox = document.querySelector('.lightbox');
  const lightboxImg = document.querySelector('.lightbox-img');

  const close = document.querySelector('.lightbox .close')

  const portfolioImgs = document.querySelectorAll('.portfolio img');
  const salonImgs = document.querySelectorAll('.salons img');


  portfolioImgs.forEach((img) => {
    img.addEventListener('click', () => {

      lightbox.style.display = 'flex'
      lightboxImg.src = img.src;

    })
  })


  salonImgs.forEach((img) => {
    img.addEventListener('click', () => {

      lightbox.style.display = 'flex'
      lightboxImg.src = img.src;

      console.log(1)

    })
  })



  close.addEventListener('click', () => {

    lightbox.style.display = 'none'
    lightboxImg.src = "";
    
  })


  lightbox.addEventListener('click', (e) => {

    if(e.target === lightbox) {
      lightbox.style.display = 'none'
      lightboxImg.src = "";
    }

  })

}






imageZoomHandler()