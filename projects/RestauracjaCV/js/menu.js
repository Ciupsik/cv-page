function barsChange() {

  const navBars = document.querySelector('.header .bars-btn')
  const navX = document.querySelector('.header .x-btn')

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








import { menu } from "../js/data.js"



function generateMenuItems() {


  const menuData = menu
  const menuContainer = document.querySelector('.menu')
  let menuHTML = ''


  menuData.forEach((category) => {

    menuHTML += `<div class="section" id="${category.id}">`
    menuHTML += `<h2>${category.category}</h2>`
    menuHTML += `<div class="items">`
    
    category.items.forEach((item) => {

      const unit =
        category.category === 'Pizze' ? 'cm' :
        category.category === 'Wina' || category.category === 'Alkohole' ? 'ml' :
        'g';
      
      menuHTML += `
        <div class="item">
          <p class="name">${item.name} - ${item.nameEng}</p>
          <p class="desc-pl">${item.description}</p>
          <p class="desc-eng">${item.descriptionEng}</p>
          <p class="price">${item.price}zł / ${item.weigth}${unit} /</p>
        </div>
      `

    })

    menuHTML += '</div> </div>'
  })


  menuContainer.innerHTML += menuHTML

}




generateMenuItems()