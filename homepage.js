const hamburger = document.getElementsByClassName('hamburger') [0]
const navLink = document.getElementsByClassName('navlink') [0]

hamburger.addEventListener('click', () => {
    navLink.classList.toggle('active')
})