function menuOpen() {
    $('body').addClass('menu-open');
    $('.hamburger').addClass('active');
    $('.navbar-nav').addClass('menuhide');
    $('.header__menu--inner').css('visibility', 'hidden').css('opacity', '0').css('transition', '0s');
    $('.header__menu--button a').addClass('button-transparent');
    $('body').css('overflow', 'hidden');
}

function menuClose() {
    $('body').removeClass('menu-open');
    $('.hamburger').removeClass('active');
    if ($("body").hasClass("enquirysidebar-open")) {} else {
        $('.header__menu--button a').removeClass('button-transparent');
        $('.navbar-nav').removeClass('menuhide');
        $('body').css('overflow', 'unset');
        $('.header__menu--inner').css('visibility', 'visible').css('opacity', '1').css('transition', '0s');
    }
}

/** Menu **/
let t1 = gsap.timeline({
    paused: true,
    onStart: menuOpen,
    onReverseComplete: menuClose,
});

t1.to(".nav-container", {
    duration: 0.8,
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    right: 0,
    ease: "Power3.InOut",
});

t1.from(".navmenu__logo", {
    stagger: 0.05,
    opacity: 0,
    y: 20,
    ease: "Power3.InOut",
}, "-=0");

t1.from(".main-nav__bottom", {
    stagger: 0.05,
    opacity: 0,
    y: 20,
    ease: "Power3.InOut",
}, "-=0");

t1.from(".mainNav__col--right ul", {
    stagger: 0.05,
    opacity: 0,
    y: 20,
    ease: "Power3.InOut",
}, "-=0");
t1.from(".menu-open .header__logo", {
    stagger: 0.05,
    opacity: 0,
    y: 20,
    ease: "Power3.InOut",
}, "-=0");

t1.from(".nav__menu--button", {
    stagger: 0.05,
    opacity: 0,
    y: 20,
    ease: "Power3.InOut",
}, "-=0");

t1.reverse();

$('.menu-open-test').on('click', function () {
    t1.reversed(!t1.reversed());
});


// Make an enquiry Sidebar Start
function revsidebarOpen() {
    $('body').addClass('enquirysidebar-open');
    $('.hamburger-enquiry').addClass('active');
    $('.navbar-nav').addClass('menuhide');
    $('.header__menu--inner, .header__menu--button').css('visibility', 'hidden').css('opacity', '0').css('transition', '0s');
    $('.header__menu--button a').addClass('button-transparent');
    $('body').css('overflow', 'hidden');
    $('.menu-open-test').css('display', 'none');
    $('.enquiry__menu__open').css('display', 'block');
}

function revsidebarClose() {
    $('.hamburger-enquiry').removeClass('active');
    $('.navbar-nav').removeClass('menuhide');
    $('.header__menu--button a').removeClass('button-transparent');
    $('body').removeClass('enquirysidebar-open');
    $('.header__menu--inner, .header__menu--button').css('visibility', 'visible').css('opacity', '1').css('transition', '0s');
    $('body').css('overflow', 'unset');
    $('.menu-open-test').css('display', 'block');
    $('.enquiry__menu__open').css('display', 'none');
}

/** Enquiry Sidebar **/
let t2 = gsap.timeline({
    paused: true,
    onStart: revsidebarOpen,
    onReverseComplete: revsidebarClose, 
});

t2.to(".enquiry-container", {
    duration: 0.8,
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    ease: "Power3.InOut",
});

t2.from(".enquiry-logo", {
    stagger: 0.05,
    opacity: 0,
    y: 20,
    ease: "Power3.InOut",
}, "-=0");

t2.from(".direct__enquiry--inner", {
    stagger: 0.05,
    opacity: 0,
    y: 20,
    ease: "Power3.InOut", 
}, "-=0");

t2.from(".enquirysidebar-open .header__logo", {
    stagger: 0.05,
    opacity: 0,
    y: 20,
    ease: "Power3.InOut",
}, "-=0");

t2.reverse();

$('.enquiry-sidebar').on('click', function () {
    t2.reversed(!t2.reversed());
    if ($("body").hasClass("menu-open")) {
        $('.menu-open-test').click();
    }
    $('body').css('overflow', 'hidden'); 

});

$('.enquiry__menu__open').on('click', function () {
    t2.reversed(!t2.reversed());
    if ($("body").hasClass("menu-open")) {
        $('.menu-open-test').click();
    }
});