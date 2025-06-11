const pages = [
  {
    text: `Sienna'
  },
  {
    text: `Please tell me not to go
We've been here long before
I live under your eyelids
I'll always be yours
I'll lay on your rooftop in the freezing cold
And I'll watch the sunset wearing all your clothes
I can feel you with me like I did before
Like when I sang you a love song by Norah Jones`,
    background: 'prompt-one.webp',
    button: 'Sienna'
  },
  {
    text: `Ooh, Sienna
Would've been cute
Ooh, Sienna
Would look just like you
I came clean
And it feels so good
If I feel seen, mm
Only through you`,
    background: 'prompt-two.webp',
    button: 'sienna'
  },
  {
    text: `I'll wait here tomorrow, outside your door
Like I did in December, when you held me close
Coming up on your corner, pulling out my hair
Hear the creak in the floorboards going up the stairs
Ooh, Sienna
Would've been cute
Ooh, Sienna
Would look just like you`,
    background: 'prompt-three.webp',
    button: 'sienna'
  },
  {
    text: `With a temper like you, run around like you
Jumping in the pool, like you
Sing to all her pets in the way I did
Be sensitive like you
And I smile when I think of all the times we had
On the beach in the winter when the waves were mad
Down by the water, crystal clear
See her face in the forest then it disappears`,
    background: 'prompt-four.webp',
    button: 'I wish you the best'
  },
  {
    text: `Goodluck on everything i hope you thrive and i hope your bf even though hes a pos treats you well I hope you knew how much i loved you Goodbye magnolia`,
    background: 'page-5-background.jpg',
    button: 'Restart>_<'
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
