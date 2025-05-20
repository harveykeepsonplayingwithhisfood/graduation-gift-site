const pages = [
  {
    text: `Hey love, I'm so proud of you for all you've done this year. Your courage and strength amaze me.`,
    background: 'background.webp',
    button: 'Next Page'
  },
  {
    text: `You're so amazing because you always find light even in the darkest times. Keep shining!`,
    background: 'prompt-one.webp',
    button: 'Next Page'
  },
  {
    text: `Your kindness touches everyone around you. Never forget how special you truly are.`,
    background: 'prompt-two.webp',
    button: 'Next Page'
  },
  {
    text: `sssss`,
    background: 'prompt-three.webp',
    button: 'Next Page'
  },
  {
    text: `Here is my love poem for you:

Every moment with you is a dream come true...

(Your poem continues here)`,
    background: 'prompt-four.webp',
    button: 'Next Page'
  },
  {
    text: `Forever and always, I will cherish you.

Love, Me.`,
    background: 'page-5-background.jpg',
    button: 'Restart'
  }
];

const pageContainer = document.getElementById('pageContainer');
const pageText = document.getElementById('pageText');
const nextBtn = document.getElementById('nextBtn');

let currentPage = 0;

// Preload images
const preloadImages = pages.map(page => {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = page.background;
    img.onload = () => resolve();
    img.onerror = () => resolve(); // fail silently
  });
});

function updatePage() {
  pageContainer.style.animation = 'none';
  void pageContainer.offsetWidth; // Trigger reflow for restart animation
  pageContainer.style.animation = 'flipIn 0.7s ease';

  pageText.textContent = pages[currentPage].text;
  nextBtn.textContent = pages[currentPage].button;

  document.body.style.backgroundImage = `url(${pages[currentPage].background})`;
}

nextBtn.addEventListener('click', () => {
  currentPage++;
  if (currentPage >= pages.length) {
    currentPage = 0;
  }
  updatePage();
});

async function init() {
  await Promise.all(preloadImages);
  updatePage();
  // Play music after user interacts (best practice)
  const music = document.getElementById('bgMusic');
  // Try autoplay, if blocked user must click once to start
  music.play().catch(() => {
    nextBtn.textContent += " (click to start music)";
    nextBtn.addEventListener('click', () => {
      music.play();
    }, { once: true });
  });
}
init();

// Starfield animation
const canvas = document.getElementById('starCanvas');
const ctx = canvas.getContext('2d');
let stars = [];
let width, height;

function resize() {
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
}
resize();

function createStars() {
  stars = [];
  const count = 150;
  for (let i = 0; i < count; i++) {
    stars.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.1 + 0.1,
      alpha: Math.random(),
      dx: (Math.random() - 0.5) * 0.1,
      dy: (Math.random() - 0.5) * 0.1,
      phase: Math.random() * 2 * Math.PI
    });
  }
}
createStars();

function animate() {
  ctx.clearRect(0, 0, width, height);
  for (const star of stars) {
    star.phase += 0.03;
    star.alpha = 0.5 + 0.5 * Math.sin(star.phase);
    star.x += star.dx;
    star.y += star.dy;

    if (star.x < 0) star.x = width;
    if (star.x > width) star.x = 0;
    if (star.y < 0) star.y = height;
    if (star.y > height) star.y = 0;

    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
    ctx.fillStyle = `rgba(255, 192, 203, ${star.alpha})`; // pink stars
    ctx.shadowColor = `rgba(255, 192, 203, ${star.alpha})`;
    ctx.shadowBlur = 6;
    ctx.fill();
  }
  requestAnimationFrame(animate);
}
animate();

window.addEventListener('resize', () => {
  resize();
  createStars();
});
