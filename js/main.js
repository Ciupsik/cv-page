







// mobile to desktop change handler

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












// cooperation mobile touch handler



function scrollerTouchHandler() {

  const scroller = document.querySelector('.cooperation .scroller');

  let startX = 0;


  scroller.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
  })

  scroller.addEventListener('touchend', (e) => {
    
    const endX = e.changedTouches[0].clientX;
    const diffX = endX - startX

    if (diffX > 30) {
      scroller.scrollBy({
        left: -1,
        behavior: 'smooth'
      })
    } else if (diffX < -30) {
      scroller.scrollBy({
        left: 1,
        behavior: 'smooth'
      })
    }
  })


}

scrollerTouchHandler()
















// cooperation scroller navigation

function scrollerButtons() {

  const scroller = document.querySelector('.cooperation .scroller')

  const btnLeft = document.querySelector('.cooperation .nav .btn-left');
  const btnRight = document.querySelector('.cooperation .nav .btn-right');

  btnLeft.addEventListener('click', () => {
    scroller.scrollBy({
      left: -1,
      behavior: 'smooth'
    })
  })

  btnRight.addEventListener('click', () => {
    scroller.scrollBy({
      left: 1,
      behavior: 'smooth'
    })
  })
}


scrollerButtons()















// faq question expanding handler

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













// form handler



function formHandler() {
  const form = document.querySelector(".contact-us .form");
  const status = document.querySelector(".contact-us .form-status"); // element na komunikaty

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: data,
        headers: {
          "Accept": "application/json"
        }
      });

      if (response.ok) {
        status.textContent = "Wiadomość wysłana ✅";
        form.reset();
      } else {
        status.textContent = "Coś poszło nie tak ❌";
      }

    } catch (error) {
      status.textContent = "Błąd sieci ❌";
      console.error(error);
    }


    setTimeout(() => {
      status.textContent = ''
    }, 5000)
  });
}

formHandler()