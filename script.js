function spawnHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.textContent = '❤';
  const startX = Math.random() * window.innerWidth;
  const duration = 3000 + Math.random() * 3000;
  const size = 16 + Math.random() * 32;

  heart.style.left = startX + 'px';
  heart.style.animationDuration = duration + 'ms';
  heart.style.fontSize = size + 'px';

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, duration);
}

setInterval(spawnHeart, 300);