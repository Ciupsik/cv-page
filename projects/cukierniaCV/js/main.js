


// header - ogolne


function mobileNavDisplay() {

  const navBars = document.querySelector('.header .menu-bars');
  const navX = document.querySelector('.header .menu-x')

  const header = document.querySelector('.header');


  navBars.addEventListener('click', () => {
    header.classList.add('mobile-active')
  })

  navX.addEventListener('click', () => {
    header.classList.remove('mobile-active')
  })


  window.addEventListener('resize', () => {
    if (window.innerWidth >= 700) {
      header.classList.remove('mobile-active')
    }
  })


}


mobileNavDisplay()




























// ustawienie przyciskow tak aby sie miescily w about us (row, column)


function setAlign() {
  const el1 = document.querySelector('.about-us .scroller');
  const el2 = document.querySelector('.about-us .info');

  const container = document.querySelector('.about-us-inner');

  if (el1.offsetHeight > el2.offsetHeight) {
    container.style.alignItems = 'center';
  } else {
    container.style.alignItems = 'flex-start';
  }
}




function btnsDirection() {
  const btnsContainers = document.querySelectorAll('.visit-us .local .btns');

  const fontSize = parseFloat(getComputedStyle(btnsContainers[0]).fontSize);
  const screenWidth = window.innerWidth;

  const remWidth = screenWidth / fontSize

  if (remWidth > 20) {
    btnsContainers.forEach((container) => {
      container.style.flexDirection = 'row'
    })
  } else {
    btnsContainers.forEach((container) => {
      container.style.flexDirection = 'column'
    })
  }
}











window.addEventListener('resize', () => {
  setAlign()
  btnsDirection()
})

setAlign()
btnsDirection()











// -----------------our offer products-----------------


import { offers } from "./data.js";

const offersData = offers;

let offerIndex = 0

let offerScrollerElementsHTML;


// generowanie elementow z JS dla danej kategorii i pobieranie ich z HTML

generateAndGetCategoryElements('desery')




function generateAndGetCategoryElements(category) {


  const scroller = document.querySelector('.offer .scroller-inner')
  const dots = document.querySelector('.offer .scroller-nav')

  let scrollerItemsHTML = ''
  let scrollerDotsHTML = ''

  let id = 0

  offersData[category].forEach((item) => {
    scrollerItemsHTML += `
      <div class="slide" data-id="${id}">
        <div class="image">
          <img src="${item.img}">
        </div>
        <p>${item.name}</p>
      </div>
    `

    scrollerDotsHTML += `
      <div class="dot ${id === 0 ? 'active' : ''}" data-id="${id}"></div>
    `


    id += 1
  })

  scroller.innerHTML = scrollerItemsHTML;
  dots.innerHTML = scrollerDotsHTML;


  offerScrollerElementsHTML = document.querySelectorAll('.offer .slide')

  offerDotsDisplay()

  //slidesObserver()
}








// zmiana kategorii po kliknieciu na KATEGORIE i ponowne generowanie i pobieranie HTML dla elementów


const offerCategories = document.querySelectorAll('.offer .offers-categories [data-category]');

offerCategories.forEach((category) => {
  category.addEventListener('click', () => {
    const name = category.dataset.category;

      generateAndGetCategoryElements(name)

      offerSetScrollerIndex(offerScrollerElementsHTML, 0)

      offerCategories.forEach((category) => {
        category.classList.remove('active')
      })

      category.classList.add('active')

  })
})









// dodawanie odpowiedzniego id do kropek i zmienianie slideu po kliknieciu w kropke

function offerDotsDisplay() {
  const dots = document.querySelectorAll('.offer .scroller-nav .dot')

  dots.forEach((dot) => {
    dot.addEventListener('click', () => {
      const id = Number(dot.dataset.id)

      offerSetScrollerIndex(offerScrollerElementsHTML, id)


      dots.forEach((dot) => {
        dot.classList.remove('active')
      })

      dot.classList.add('active')
    })
  })
}



// zmienianie koloru kropki przez id

function activateOfferDotByIndex(index) {
  const dots = document.querySelectorAll('.offer .scroller-nav .dot')

  
  dots.forEach((dot) => {
    dot.classList.remove('active')

    const id = Number(dot.dataset.id)

    if (id === index) {
      dot.classList.add('active')
    }
  })
}







// window resize listener ktory kiedy jest ostatni slide przy resize robi slides, prev


window.addEventListener('resize', () => {

  const screenWidth = window.innerWidth;

  const scrollerLength = offerScrollerElementsHTML.length - 1

  if (screenWidth >= 1300) {
     if (offerIndex >= scrollerLength - 1) {
      offerSetScrollerIndex(offerScrollerElementsHTML, 'none')
    }


  } else if (screenWidth >= 830) {
    if (offerIndex >= scrollerLength) {
      offerSetScrollerIndex(offerScrollerElementsHTML, 'none')
    }

  }



})





// funkcja ktora odpowiada za to na jaki slide przejśc przez przesłaniu indexu

function offerSetScrollerIndex(slides, index) {



  const screenWidth = window.innerWidth;
  let offerMaxIndex = 0;

  if (screenWidth < 830) {
    offerMaxIndex = slides.length - 1
  } else if (screenWidth < 1300) {
    offerMaxIndex = slides.length - 2
  } else {
    offerMaxIndex = slides.length - 3
  }

  if (offerIndex < 0) offerIndex = 0;
  if (offerIndex >= offerMaxIndex) offerIndex = offerMaxIndex

  


  if (index === 'prev') {
    offerIndex -= 1

  } else if (index === 'next') {
    offerIndex += 1

  } else if (index === 'none') {
    

  } else {
    offerIndex = index

  }


  if (offerIndex < 0) offerIndex = 0;
  if (offerIndex >= offerMaxIndex) offerIndex = offerMaxIndex


  //console.log(offerIndex, offerMaxIndex)


  slides[offerIndex].scrollIntoView({
    behavior: 'smooth',
    inline: 'start',
    block: 'nearest'
  })


  activateOfferDotByIndex(offerIndex)

}










// event listener strzałek


const offerArwLeft = document.querySelector('.offer .arrow-left');
const offerArwRight = document.querySelector('.offer .arrow-right');


offerArwLeft.addEventListener('click', () => {
  offerSetScrollerIndex(offerScrollerElementsHTML, 'prev')
})


offerArwRight.addEventListener('click', () => {
  offerSetScrollerIndex(offerScrollerElementsHTML, 'next')
})










// offer - funkcjonalnosc przewijania palcem

function offerTouchScrollHandler() {

  const slider = document.querySelector('.offer .scroller-inner');


  let startX = 0;

  slider.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX
  });

  slider.addEventListener('touchend', (e) => {
    
    const endX = e.changedTouches[0].clientX
    const diffX = endX - startX;

    if (diffX > 30) {
      offerSetScrollerIndex(offerScrollerElementsHTML, 'prev')
    } else if (diffX < -30) {
      offerSetScrollerIndex(offerScrollerElementsHTML, 'next')
    }

  });

}

offerTouchScrollHandler()















// about us - funkcjonalnosc przewijania palcem




function aboutTouchScrollHandler() {

  const slider = document.querySelector('.about-us .scroller-inner');


  let startX = 0;

  slider.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX
  });

  slider.addEventListener('touchend', (e) => {
    
    const endX = e.changedTouches[0].clientX
    const diffX = endX - startX;

    if (diffX > 30) {
      slider.scrollBy({
        left: -1,
        behavior: 'smooth'
      })


    } else if (diffX < -30) {
      slider.scrollBy({
        left: 1,
        behavior: 'smooth'
      })
    }

  });

  
}

aboutTouchScrollHandler()














// -----------------about us dots-----------------




const aboutSlides = document.querySelectorAll('.about-us .image');
const aboutDots = document.querySelectorAll('.about-us .dot');

let aboutCurrentIndex = 0;

// klikanie w kropki i zmiania slideu

aboutDots.forEach((dot) => {
  dot.addEventListener('click', () => {
    const dotId = Number(dot.dataset.id);

    aboutSlides[dotId].scrollIntoView({
      behavior: 'smooth',
      inline: 'start',
      block: 'nearest'
    })

    aboutCurrentIndex = dotId;

    aboutDots.forEach((dot) => {
      dot.classList.remove('active')
    })

    dot.classList.add('active')
  })
})




function aboutChangeDotId(index) {
  aboutDots.forEach((dot) => {

    const dotId = Number(dot.dataset.id);
    dot.classList.remove('active')

    if (dotId === index) {
      dot.classList.add('active')
    }

  })
}






const aboutSlider = document.querySelector('.about-us .scroller-inner');

function aboutGetCurrentSlideIndex() {

  const slideWidth = aboutSlides[0].getBoundingClientRect().width;
  const scroll = aboutSlider.scrollLeft;

  const currentSlide = Math.round(scroll / slideWidth)

  if (currentSlide !== aboutCurrentIndex) {
    aboutCurrentIndex = currentSlide;
    aboutChangeDotId(aboutCurrentIndex)
  } 

 
}


aboutSlider.addEventListener('scroll', () => {
  aboutGetCurrentSlideIndex();
  
});






























// -----------------reviews dots-----------------


const revDots = document.querySelectorAll('.reviews .dot');
const revColumns = document.querySelectorAll('.reviews-inner-1 .col');

let currentRevId = 0

revDots.forEach((dot) => {
  dot.addEventListener('click', () => {
    const newId = Number(dot.dataset.id)
    setColumnDisplay(currentRevId, newId)
    currentRevId = newId

    revDots.forEach((dot) => {
      dot.classList.remove('active')
    })

    dot.classList.add('active')
  })
})


function setColumnDisplay(currentIndex, newIndex) {
  console.log(currentIndex, newIndex)

  if(currentIndex !== newIndex) {

    revColumns[currentIndex].style.opacity = 0
    revColumns[newIndex].style.opacity = 0

    setTimeout(() => {
      revColumns[currentIndex].style.display = 'none'
      revColumns[newIndex].style.display = 'flex'
      
    }, 400)

    setTimeout(() => {
      revColumns[newIndex].style.opacity = 1
    }, 800)

  }
}



