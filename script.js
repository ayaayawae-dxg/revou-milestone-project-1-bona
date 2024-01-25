const isMobile = window.innerWidth < 768
const toggleNavButtons = document.getElementsByClassName('toggle-nav')
const navMenu = document.getElementById('nav-menu')
const navWidth = getComputedStyle(document.documentElement).getPropertyValue('--nav-menu-width')
const learningContentWrapper = document.getElementById('learning-content')

const init = () => {
    console.log('Loaded')
    if (!isMobile) {
        navMenu.classList.add('is-active')
    }
}

// nav menu listener
for (let toggleBtn of toggleNavButtons) {
    toggleBtn.addEventListener('click', () => {
        const isNavActive = navMenu.className.split(' ').includes('is-active')
        navMenu.classList.toggle("is-active");
        if (!isNavActive) {
            if (!isMobile) {
                learningContentWrapper.style.marginLeft = navWidth
            }
        } else {
            learningContentWrapper.style.marginLeft = '0px'
        }
    })
}

document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(e)

    window.location.href = '../index.html';
})