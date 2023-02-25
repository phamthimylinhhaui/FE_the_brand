const buyBtns = document.querySelectorAll('.js-buy-ticket')
const modal = document.querySelector('.js-modal')
const close = document.querySelector('.js-modal-close')
const modalContainer = document.querySelector('.js-modal-container')

function showModal () {
  modal.classList.add('open')
}

for (const buyBtn of buyBtns) {
  buyBtn.addEventListener('click', showModal)
}

function hideModal () {
  modal.classList.remove('open')
}

close.addEventListener('click', hideModal)

modal.addEventListener('click', hideModal)
//  nhấn vào bất cứ đâu cũng close, có sự kiện nổi bọt,
//  resolve ngăn modal-container k nổi lên vào k bị click vào

modalContainer.addEventListener('click', function (e) {
  e.stopPropagation()
})

//     humbemger menu
const header = document.getElementById('header')
const mobileMenu = document.getElementById('mobile-menu')
const headerHeight = header.clientHeight

mobileMenu.addEventListener('click', function () {
  const isClose = header.clientHeight === headerHeight
  
  if (isClose) {
    header.style.height = 'auto'
  } else {
    header.style.height = ''
  }
})

//  dynamic open/close menu when click
let menuItems = document.querySelectorAll('#nav li a[href*="#"]')
for (let i = 0; i < menuItems.length; i++) {
  let menuItem = menuItems[i]
  menuItem.addEventListener('click', function (e) {
    let isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
    if (isParentMenu) {
      e.preventDefault();
    } else {
      header.style.height = ''
    }
  })
}