let currentSlide = 0;
const slides = document.querySelectorAll('.work-detail');
const dots = document.querySelectorAll('.dot');

function showContainer(n) {
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    currentSlide = n;
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
    showContainer(currentSlide);
});
