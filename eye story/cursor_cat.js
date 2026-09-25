(function () {
  const IMAGES = Array.from({ length: 50 }, (_, i) => `cat/cursor/${i + 1}.png`);

  const MIN_INTERVAL = 1000;
  const MAX_INTERVAL = 5000;

  const el = document.createElement('img');
  el.style.cssText = [
    'position: fixed',
    'pointer-events: none',
    'z-index: 999999',
    'width: 50px',
    'height: 50px',
    'object-fit: contain',
    'transform: translate(-4px, -4px)',
    'display: none',
  ].join(';');
  document.body.appendChild(el);

  document.addEventListener('mousemove', (e) => {
    el.style.display = 'block';
    el.style.left = e.clientX + 'px';
    el.style.top  = e.clientY + 'px';
  });
  document.addEventListener('mouseleave', () => {
    el.style.display = 'none';
  });

  let current = -1;

  function pickRandom() {
    if (IMAGES.length === 1) return 0;
    let idx;
    do { idx = Math.floor(Math.random() * IMAGES.length); }
    while (idx === current);
    return idx;
  }

  function switchImage() {
    current = pickRandom();
    el.src = IMAGES[current];

    const delay = MIN_INTERVAL +
      Math.random() * (MAX_INTERVAL - MIN_INTERVAL);
    setTimeout(switchImage, delay);
  }

  switchImage();
})();