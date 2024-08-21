$(document).ready(function () {
  // Banner Slider Functionality
  let bannerIndex = 0;
  const banners = $(".banner");
  const numBanners = banners.length;
  const indicators = $(".indicator");

  function showNextBanner() {
    banners.eq(bannerIndex).fadeOut(1000, function () {
      bannerIndex = (bannerIndex + 1) % numBanners;
      banners.eq(bannerIndex).fadeIn(1000);

      indicators.removeClass("active");
      indicators.eq(bannerIndex).addClass("active");
    });
  }

  banners.hide();
  banners.eq(bannerIndex).show();
  indicators.eq(bannerIndex).addClass("active");

  setInterval(showNextBanner, 2000);

  // Carousel Functionality
  const $carouselWrapper = $(".carousel-wrapper");
  const $cards = $carouselWrapper.children(".card");
  const cardCount = $cards.length;
  const visibleCount = 4;
  const cardWidth = 100 / visibleCount;
  let carouselIndex = 0;

  function updateCarousel() {
    const offset = -carouselIndex * cardWidth;
    $carouselWrapper.css("transform", `translateX(${offset}%)`);
  }

  $(".next-btn").on("click", function () {
    if (carouselIndex < cardCount - visibleCount) {
      carouselIndex++;
      updateCarousel();
    }
  });

  $(".prev-btn").on("click", function () {
    if (carouselIndex > 0) {
      carouselIndex--;
      updateCarousel();
    }
  });

  const $testimonialWrapper = $(".testimonial-wrapper");
  const $testimonialCards = $testimonialWrapper.children(".testimonial-card");
  const testcardCount = $testimonialCards.length;
  const testvisibleCount = 3; 
  const testcardWidth = 100 / testvisibleCount; 
  let currentIndex = 0;

  // testimonials
  function updateSlider() {
    const offset = -currentIndex * testcardWidth;
    $testimonialWrapper.css("transform", `translateX(${offset}%)`);

    $(".testimonial-indicator").removeClass("active");
    $(".testimonial-indicator").eq(currentIndex).addClass("active");
  }

  $(".testimonial-next-btn").on("click", function () {
    if (currentIndex < testcardCount - testvisibleCount) {
      currentIndex++;
      updateSlider();
    }
  });

  $(".testimonial-prev-btn").on("click", function () {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }
  });

  $(".testimonial-indicator").on("click", function () {
    const index = $(this).index();
    currentIndex = index;
    updateSlider();
  });


  setInterval(function () {
    if (currentIndex < testcardCount - testvisibleCount) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateSlider();
  }, 4000);
});
