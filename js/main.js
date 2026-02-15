


function mobileNavDisplay() {

  const navBars = document.querySelector('.header .menu-bars');
  const navX = document.querySelector('.header .menu-x');

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



  if (window.innerWidth >= 725) {
    header.classList.remove('mobile-active')
  }

}


mobileNavDisplay()








function scrollerButtons() {

  const scroller = document.querySelector('.cooperation .scroller')

  const btnLeft = document.querySelector('.cooperation .nav .btn-left');
  const btnRight = document.querySelector('.cooperation .nav .btn-right');

  btnLeft.addEventListener('click', () => {
    scroller.scrollBy({
      left: -500,
      behavior: 'smooth'
    })
  })

  btnRight.addEventListener('click', () => {
    scroller.scrollBy({
      left: 500,
      behavior: 'smooth'
    })
  })
}


scrollerButtons()








function faqQuestionsHeight() {

  const blocks = document.querySelectorAll('.faq .block');
  
  blocks.forEach((block) => {

    block.addEventListener('click', () => {
      const answer = block.querySelector('.answer');

      if (answer.classList.contains('active')) {
        answer.style.maxHeight = 0;
        answer.classList.remove('active')
        block.classList.remove('active')
      } else {
        answer.classList.add('active')
        block.classList.add('active')
        answer.style.maxHeight = answer.scrollHeight + 32 + 'px'
      }

    });

  });

}

faqQuestionsHeight();