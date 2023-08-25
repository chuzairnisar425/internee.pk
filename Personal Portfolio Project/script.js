let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
const sr = ScrollReveal({
    distance: '80px',
    duration: 2800,
    reset: true
})
sr.reveal('.text , .social', { delay: 300, origin: 'bottom' })
sr.reveal('header', { delay: 100, origin: 'top' })
sr.reveal('section', { delay: 300, origin: 'bottom' });
sr.reveal('footer', { delay: 300, origin: 'left' })

// scroll-up button show/hide script
if (this.scrollY > 500) {
    $('.scroll-up-btn').addClass("show");
} else {
    $('.scroll-up-btn').removeClass("show");
}
// slide-up script
$('.scroll-up-btn').click(function () {
    $('html').animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $('html').css("scrollBehavior", "auto");
});

// slide-up script
$('.scroll-up-btn').click(function () {
    $('html').animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $('html').css("scrollBehavior", "auto");
});

$('.navbar .menu li a').click(function () {
    // applying again smooth scroll on menu items click
    $('html').css("scrollBehavior", "smooth");
});

// typing text animation script
var typed = new Typed(".typing", {
    strings: ["Front-End Developer", "UI Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

var typed = new Typed(".typing-2", {
    strings: ["Frontend Developer", "Photographer", "UI Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

