let currentIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.container-for-cards'); // Update to match your HTML structure
    const totalSlides = slides.length;
    const carouselInner = document.querySelector('.carousel-inner'); // Ensure this matches your actual HTML

    if (!carouselInner) {
        console.error('Carousel container not found!');
        return;
    }

    if (currentIndex >= totalSlides) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    }

    // Determine how many slides to show per screen size
    const slidesToShow = window.innerWidth > 768 ? 3 : 1;

    // Update the offset based on the current index and the number of slides to show
    const offset = -currentIndex * (100 / slidesToShow);
    carouselInner.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    const slidesToShow = window.innerWidth > 768 ? 3 : 1;
    currentIndex += slidesToShow; // Move forward by the number of visible slides
    showSlides();
}

function prevSlide() {
    const slidesToShow = window.innerWidth > 768 ? 3 : 1;
    currentIndex -= slidesToShow; // Move backward by the number of visible slides
    showSlides();
}

window.onload = showSlides;
window.onresize = showSlides;