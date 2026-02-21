





// mobile to desktop change handler

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













function formSubmitHandler() {
  const form = document.querySelector(".contact-us .form");
  const status = document.querySelector(".contact-us .form-status");

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    /** 
    if (!data.name?.trim() || !data.email?.trim()) {
      alert("Wypełnij wszystkie wymagane pola.");
      return;
    }*/

    data.form_type = 'contact';

    data.ref = localStorage.getItem('affiliate_ref') || '';
    data.timestamp = new Date().toLocaleString('pl-PL');

    //console.log("Obiekt wysyłany do make:", data);

    try {
      const response = await fetch('https://hook.eu1.make.com/4unij60c3dtjpw47swxva7dq6miydqup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (!response.ok) throw new Error('Błąd połączenia z serwerem');

      form.reset();
      alert('Formularz wysłany');

    } catch (err) {
      console.error(err);
      alert('Błąd wysyłania');
    }
  });
}

formSubmitHandler();














// -------------------LocalStorage - linki afiliacyjne-------------------





function paramsTracking() {
  const params = new URLSearchParams(window.location.search);
  const ref = params.get('ref');

  if (ref && !localStorage.getItem('affiliate_ref')) {
    localStorage.setItem('affiliate_ref', ref);
    

    sendToMake(ref);
  }
}




async function sendToMake(refValue) {
  const webhookUrl = 'https://hook.eu1.make.com/092mjraiogpfinfmbex5se3rjyve2vld';

  const payload = {
    event_type: "new_affiliate_visit",
    affiliate_id: refValue,
    page_url: window.location.href,
    user_agent: navigator.userAgent,
    timestamp: new Date().toISOString()
  };

  try {
    await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    //console.log('Dane wysłane do make');
  } catch (error) {
    console.error('Błąd wysyłki:', error);
  }
}





document.addEventListener("DOMContentLoaded", function () {
  paramsTracking();
});














