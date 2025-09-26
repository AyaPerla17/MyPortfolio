document.addEventListener('DOMContentLoaded', () => {
  function createSliderVertical(id) {
    const slider = document.getElementById(id);
    if (!slider) return null;
    const slides = Array.from(slider.children);
    const total = slides.length;
    let index = 0;
    let intervalId = null;

    function getSlideHeight() {
      return slides[0] ? slides[0].offsetHeight : 0;
    }

    function showSlide(i) {
      const slideHeight = getSlideHeight();
      slider.style.transform = `translateY(-${i * slideHeight}px)`;
    }

    function startAutoPlay() {
      stopAutoPlay();
      intervalId = setInterval(() => {
        index = (index + 1) % total;
        showSlide(index);
      }, 10000);
    }

    function stopAutoPlay() {
      if (intervalId) { clearInterval(intervalId); intervalId = null; }
    }

    slides.forEach(slide => slide.addEventListener('click', stopAutoPlay));

    // Recalcule après chargement des images
    const imgs = slider.querySelectorAll('img');
    let loaded = 0;
    if (imgs.length === 0) {
      showSlide(0);
      startAutoPlay();
    } else {
      imgs.forEach(img => {
        if (img.complete) {
          loaded++;
        } else {
          img.addEventListener('load', () => {
            loaded++;
            if (loaded === imgs.length) showSlide(0);
          });
          img.addEventListener('error', () => {
            loaded++;
            if (loaded === imgs.length) showSlide(0);
          });
        }
      });
      // si déjà chargées
      if (loaded === imgs.length) showSlide(0);
      startAutoPlay();
    }

    window.addEventListener('resize', () => showSlide(index));

    return {
      next: () => { index = (index + 1) % total; showSlide(index); },
      prev: () => { index = (index - 1 + total) % total; showSlide(index); },
      stop: stopAutoPlay,
      start: startAutoPlay
    };
  }

  const etudiantsSlider = createSliderVertical('etudiants');
  const adminsSlider = createSliderVertical('admins');
  const superviseursSlider = createSliderVertical('superviseurs');

  // Lier les boutons de chaque wrapper (plus fiable que les onclick inline)
  document.querySelectorAll('.slider-wrapper-vertical').forEach(wrapper => {
    const nextBtn = wrapper.querySelector('.slider-btn.next');
    const prevBtn = wrapper.querySelector('.slider-btn.prev');
    const sliderEl = wrapper.querySelector('.slider-vertical');
    const targetId = sliderEl ? sliderEl.id : null;

    function call(target, isNext) {
      if (!target) return;
      if (target === 'etudiants' && etudiantsSlider) isNext ? etudiantsSlider.next() : etudiantsSlider.prev();
      if (target === 'admins' && adminsSlider) isNext ? adminsSlider.next() : adminsSlider.prev();
      if (target === 'superviseurs' && superviseursSlider) isNext ? superviseursSlider.next() : superviseursSlider.prev();
    }

    if (nextBtn) nextBtn.addEventListener('click', () => call(targetId, true));
    if (prevBtn) prevBtn.addEventListener('click', () => call(targetId, false));
  });
});
