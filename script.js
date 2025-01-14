const scroll = new LocomotiveScroll({
    el: document.querySelector('body'),
    smooth: true
});

let elemCOntainer = document.querySelector('#elem-container')
let fixedImage = document.querySelector('#fixed-image')
let elems = document.querySelectorAll('.elem')

elemCOntainer.addEventListener('mouseenter', function () {
    fixedImage.style.display = 'block'
})
elemCOntainer.addEventListener('mouseleave', function () {
    fixedImage.style.display = 'none'
})

elems.forEach(function (elem) {
    elem.addEventListener('mouseenter', function () {
        let image = elem.getAttribute('data-image')
        fixedImage.style.backgroundImage = `url(${image})`
    })
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 100,
});

let fullscr = document.getElementById('full-scr')
let menu = document.querySelector('nav h3')
let navImg = document.querySelector('nav img')
flag = 0
menu.addEventListener('click', () => {
    if (flag == 0) {
        navImg.style.opacity = 0
        fullscr.style.top = 0
        flag = 1
    } else {
        fullscr.style.top = "-100%"
        navImg.style.opacity = 1
        flag = 0
    }
})

let loader = document.querySelector('#loader')
setTimeout(function () {
    loader.style.top = '-100%'
}, 4000)




