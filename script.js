const links = document.querySelectorAll('.link')
const hoverLines = document.querySelectorAll('.hover-line')
const socialIcons = document.querySelectorAll('.social-icon')
const hoverLinesFooter = document.querySelectorAll('.hover-line-footer')
const mobileLinks = document.querySelectorAll('.mobile-link a')
const mobileHoverLines = document.querySelectorAll('.mobile-hover-line')

const toggleMenu = document.querySelector('.toggle-menu')
const mobileMenu = document.getElementById('mobile-nav-container')
const closeMenu = document.querySelector('.icon-close')

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('mouseover', () => {
        hoverLines[i].style.display = 'block'
    })

    links[i].addEventListener('mouseout', () => {
        hoverLines[i].style.display = 'none'
    })
}

for (let i = 0; i < socialIcons.length; i++) {
    socialIcons[i].addEventListener('mouseover', () => {
        hoverLinesFooter[i].style.display = 'block'
    })

    socialIcons[i].addEventListener('mouseout', () => {
        hoverLinesFooter[i].style.display = 'none'
    })
}

for (let i = 0; i < mobileLinks.length; i++) {
    mobileLinks[i].addEventListener('mouseover', () => {
        mobileHoverLines[i].style.display = 'block'
    })

    mobileLinks[i].addEventListener('mouseout', () => {
        mobileHoverLines[i].style.display = 'none'
    })
}

toggleMenu.addEventListener('click', () => {
    mobileMenu.style.display = 'block'
    mobileMenu.style.animation = 'animateMobileMenuOpen 0.5s ease-in-out'
    document.body.style.overflow = 'hidden'
})

closeMenu.addEventListener('click', () => {
    mobileMenu.style.animation = 'animateMobileMenuClose 0.5s ease-in-out forwards'
    document.body.style.overflowY = 'scroll'
})

if (window.innerWidth >= 819) {
    mobileMenu.style.display = 'none'
}

function hideMobileMenu() {
    if (window.innerWidth >= 819) {
        mobileMenu.style.display = 'none'
        document.body.style.overflowY = 'scroll'
    }
}

window.addEventListener('resize', hideMobileMenu)