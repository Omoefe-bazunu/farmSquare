let i = 0;
let imgSlides = [];
let time = 5000;

imgSlides[0] = 'passion1.jpg';
imgSlides[1] = 'passion2.jpg';

changeImgSlides = () => {
    document.querySelector('#sec2 img').src = imgSlides[i];

    if (i < imgSlides.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout(changeImgSlides, time);
}

window.onload = changeImgSlides;

window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 0) {
        nav.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

