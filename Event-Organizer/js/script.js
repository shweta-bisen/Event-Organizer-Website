// Toggle menu and navbar visibility
let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

let themeToggler = document.querySelector('.theme-toggler');
let toggleBtn = document.querySelector('.theme-toggler .toggle-btn'); // more specific

toggleBtn.onclick = () => {
    themeToggler.classList.toggle('active');
};

// Remove active classes on scroll
window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    themeToggler.classList.remove('active');
};

// Theme color changer
document.querySelectorAll('.theme-toggler .theme-btn').forEach(btn => {
    btn.onclick = () => {
        let color = btn.style.backgroundColor; // fixed: background -> backgroundColor
        document.documentElement.style.setProperty('--main-color', color);
    };
});

// Swiper for Home Slider (full width, centered)
const homeSwiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: true,
    },
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    }
});

// Swiper for Review Slider (inside container)
const reviewSwiper = new Swiper(".review-slider", {
    grabCursor: true,
    loop: true,
    spaceBetween: 20,
    slidesPerView: 1,
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    }
});
