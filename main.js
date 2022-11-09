const faqs = document.querySelectorAll('.faq')

faqs.forEach(faq => {
  faq.addEventListener('click', () => {
    faq.classList.toggle('active')
  })
})

const hamb = document.querySelectorAll('.hamb')
const menu = document.querySelectorAll('.menu')
hamb.forEach(hamb => {
  hamb.addEventListener('click', () => {
    menu.classList.toggle('active')
  })
})

ScrollReveal({ distance: '70px' })

ScrollReveal().reveal('.card1', {
  delay: 250,
  duration: 1000,
  reset: false,
  origin: 'bottom'
})

ScrollReveal().reveal('.card2', {
  delay: 300,
  duration: 1000,
  reset: false,
  origin: 'bottom'
})

ScrollReveal().reveal('.card3', {
  delay: 350,
  duration: 1000,
  reset: false,
  origin: 'bottom'
})

ScrollReveal().reveal('.depoimentos', {
  delay: 300,
  duration: 1200,
  reset: false,
  origin: 'left'
})

ScrollReveal().reveal('.plano1', {
  delay: 200,
  duration: 1000,
  reset: false,
  origin: 'bottom'
})
