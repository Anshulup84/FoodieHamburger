const hamburgerIcon = document.querySelector('.hamburger-menu-container')
const headerContent = document.querySelector('.header-content')
const closeIcon = document.querySelector('.close-icon')
const goToTop = document.querySelector('.go-to-top')
const main = document.querySelector('main-content')

hamburgerIcon.addEventListener('click', () => {
    headerContent.classList.add('menu-open')
})

closeIcon.addEventListener('click', () => {
    headerContent.classList.remove('menu-open')
})
