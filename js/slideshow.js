// Slideshow for home page
(function() {
  const slides = document.querySelectorAll('.slide');
  const indicators = document.querySelectorAll('.slide-indicator');
  
  if (slides.length === 0) return;

  let currentSlide = Math.floor(Math.random() * slides.length);
  const slideInterval = 5000; // 5 seconds
  let intervalId;

  // Show specific slide
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
    indicators.forEach((indicator, i) => {
      indicator.classList.toggle('active', i === index);
    });
    currentSlide = index;
  }

  // Next slide
  function nextSlide() {
    const next = (currentSlide + 1) % slides.length;
    showSlide(next);
  }

  // Start slideshow
  function startSlideshow() {
    showSlide(currentSlide);
    intervalId = setInterval(nextSlide, slideInterval);
  }

  // Stop slideshow
  function stopSlideshow() {
    clearInterval(intervalId);
  }

  // Indicator click handlers
  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      stopSlideshow();
      showSlide(index);
      startSlideshow();
    });
  });

  // Start on load
  startSlideshow();
})();
