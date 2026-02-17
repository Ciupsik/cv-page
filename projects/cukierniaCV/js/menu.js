


// header bars


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
















import { menuItems } from "../js/data.js";

function generateMenu() {

  const menuContainer = document.querySelector('.menu')
  let menuHTML = ''

  menuItems.forEach((category) => {
    let itemsHTML = ''
    
    category.items.forEach((item) => {
      itemsHTML += `
        <p class="item">${item.name} <br><span class="price"><span class="dots"></span> ${item.price}zł - ${item.weigth}</span></p>
      `
    })


    menuHTML += `
      <div class="category">
        <h2 class="catName">${category.name}</h2>

        <div class="category-inner">
          
          <div class="image" style="background-image: url('${category.imgURL}')">
          </div>

          <div class="positions">
            ${itemsHTML}
          </div>
        </div>
      </div>
    `
  })

  menuContainer.innerHTML += menuHTML;
  console.log(menuContainer)

}

generateMenu()












function generateDots() {

  const dots = document.querySelectorAll('.menu .dots');


  let count = 0
  
  let rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);

  if (window.innerWidth < 425) {
    count = Math.max((window.innerWidth / 23) - (rootFontSize * 0.2), 4)

  } else if (window.innerWidth < 1225) {
    count = Math.max((window.innerWidth / 16) - (rootFontSize * 2), 6)
  
  } else {
    count = Math.min(Math.max((window.innerWidth / 32) - (rootFontSize * 2), 6), 24)
  }



  dots.forEach((dot) => {
    dot.innerHTML = '.'.repeat(count)
  })

}

generateDots()

window.addEventListener('resize', () => {
  generateDots()
})



