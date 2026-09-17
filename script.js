const cover = document.querySelector('.cover');

cover.addEventListener('click', () => {
  cover.style.transform = 'rotateY(-180deg)';

  setTimeout(() => {
    cover.style.display = 'none';
  }, 900);
});