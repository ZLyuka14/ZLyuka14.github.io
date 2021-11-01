function createSpoiler(container, content) {
  container.style.cursor = 'pointer';
  container.style.userSelect = 'none';
  container.addEventListener('click', (e) => {
    e.preventDefault();
    container.classList.toggle('active');
    content.classList.toggle('hidden');
  });
}

export default createSpoiler;
