window.onload = function () {
  // Handles accordion panel quote box
  const acc = document.getElementsByClassName('accordion');
  let activeButton;

  for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function () {
      this.classList.toggle('active');
      const panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = `${panel.scrollHeight}px`;
      }
      if (typeof activeButton === 'object' && activeButton !== this) {
        activeButton.classList.remove('active');
        activeButton.nextElementSibling.style.maxHeight = null;
      }
      activeButton = this;
    });
  }


  // Makes headline, subhead, byline fade away when scrolling
  document.addEventListener('scroll', () => {
    document.querySelector('.top').style.opacity = 1 - document.body.scrollTop / 100;
  });
};
