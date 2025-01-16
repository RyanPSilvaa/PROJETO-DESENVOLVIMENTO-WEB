let currentIndex = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.carousel-slide img');
    const totalSlides = slides.length;

    currentIndex = (currentIndex + step + totalSlides) % totalSlides;
    const newTransformValue = -currentIndex * 100;
    document.querySelector('.carousel-container').style.transform = `translateX(${newTransformValue}%)`;
}
