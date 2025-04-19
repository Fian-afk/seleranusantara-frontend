document.addEventListener('DOMContentLoaded', function() {
    // Fungsi Slide
    let slideIndex = 0;
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    function showSlide(n) {
        if (n >= slides.length) slideIndex = 0;
        if (n < 0) slideIndex = slides.length - 1;
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active-dot'));
        slides[slideIndex].classList.add('active');
        dots[slideIndex].classList.add('active-dot');
    }
    function nextSlide() {
        showSlide(slideIndex += 1);
    }

    function prevSlide() {
        showSlide(slideIndex -= 1);
    }

    showSlide(slideIndex);
    // Set up event listeners
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            slideIndex = index;
            showSlide(slideIndex);
        });
    });

    // Auto slide
    setInterval(nextSlide, 5000);
});