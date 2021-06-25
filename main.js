let nav = document.querySelector('#header nav')
let toggle = document.querySelectorAll('nav .toggle')

for (let element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

//----------------------- click//
let links = document.querySelectorAll('nav ul li a')

for (let link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

//----------------------- mudar header após scroll//

function changeHeaderWhenScroll() {
  let header = document.querySelector('#header')
  let navHeight = header.offsetHeight

  let backToTopButton = document.querySelector('.back-to-top')
  let footer = document.querySelector('footer').offsetHeight

  let documentHeight = document.querySelector('body').offsetHeight
  let changeButtonColorDesignatedHeight =
    documentHeight -
    window.innerHeight -
    footer +
    header.offsetHeight +
    backToTopButton.offsetHeight

  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
    backToTopButton.classList.add('show')
    if (window.scrollY >= changeButtonColorDesignatedHeight) {
      backToTopButton.classList.add('inverted-colors')
    } else {
      backToTopButton.classList.remove('inverted-colors')
    }
  } else {
    header.classList.remove('scroll')
    backToTopButton.classList.remove('show')
  }
}
//------------------ swiper //

let swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  mousewheel: true,
  keyboard: true,
  loop: true,
  breakpoints: {
    992: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

//------------------ scroll reveal //

let scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .text, #home .image,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links,
  footer .text, footer .social-media`,
  { interval: 100 }
)

//------------------ back to top button //

//NAO TO USANDO ISSO AQUI, VAI DAR MERDA//
function backToTopButtonActivation() {
  let backToTopButton = document.querySelector('.back-to-top')
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}
//------------------ detect scroll and page section shown //

let sections = document.querySelectorAll('main section[id]')
function activateMenuByShownSection() {
  for (let section of sections) {
    let checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

    let sectionTop = section.offsetTop
    let sectionHeight = section.offsetHeight
    let sectionId = section.getAttribute('id')

    let checkpointStart = checkpoint >= sectionTop
    let checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

//------------------ CALLER FUNCTION //

window.addEventListener('scroll', function () {
  //backToTopButtonActivation()
  changeHeaderWhenScroll()
  activateMenuByShownSection()
})
