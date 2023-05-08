document.addEventListener('DOMContentLoaded', () => {
  const carousels = document.querySelectorAll('.bc-carousel');

  if(window.innerWidth < 992 || !carousels) {
    return;
  }

  carousels.forEach((carousel) => {
    const items = carousel.querySelectorAll('.carousel-item > .row > :where(div, article)');
    const itemsOnSlide = Number(carousel.dataset.bcItemsOnSlide);

    // remove all slides except first
    carousel.querySelectorAll('.carousel-item:not(:first-child)').forEach((item) => {
      item.remove();
    });

    // add items one by one
    for(let i=0; i<items.length; i++) {
      if(i === 0) {
        continue;
      }

      // create new slide if needed
      if(i % itemsOnSlide === 0) {
        const lastSlide = carousel.querySelector('.carousel-item:last-child');
        const newSlide = lastSlide.cloneNode(true);
        newSlide.classList.remove('active');
        newSlide.querySelector(':scope > .row').innerHTML = '';
        lastSlide.after(newSlide);
      }

      // add to last currently existing slide
      carousel.querySelector('.carousel-item:last-child > .row').appendChild(items[i]);
    }

    // update indicators if displayed
    const indicators = carousel.querySelectorAll('.carousel-indicators > button');
    if(indicators) {
      const totalItems = carousel.querySelectorAll('.carousel-item').length;

      indicators.forEach((indicator, index) => {
        if(index >= totalItems) {
          indicator.remove();
        }
      });
    }
  });
});
