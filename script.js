const pages = [
  {
    text: `CONGRATSULATION ON GRADUATING MIKAAA, I made this as a little celebrative present :p`,
    background: 'background.webp',
    button: 'Click this dum dum'
  },
  {
    text: `I AM SO PROUD OF YOU. What you have done with school is not possible for anyone other than you, It blows me mind to see how much you have achieved you worked so hard for this mika this wasn't a "academic comeback" what you did is so much more you came back to school after not going much and you did all the work you had to do you caught up and you thrived no matter your physical health your mental health you went back and you did it all it would be been so hard but you did it and i always knew you could ever since i met you i believed in you because you are the most amazing and smart person i have ever met in my life you've done so well my dear mika and you deserve everything good that has come of this im so proud of you it makes me want to cry(i did cry) #crybabysam you didn't even just graduate you graduated WITH GOOD GRADES??? and i cant even bring words to how amazing that is`,
    background: 'prompt-one.webp',
    button: 'Im so proud of you'
  },
  {
    text: `You have had no parental help your entire life you've always had to be independant and yet here you are, A highschool graduate who got accepted into university and is moving in with there best friend and is in a commited relationship with someone they love dearly, Im so happy to see everything going well for you you deserve everything in my eyes and Im happy to be here to witness you blossom like the flower you are you mean the world to me, You mean fourth dimensional space time to me and i love you mika`,
    background: 'prompt-two.webp',
    button: 'I have always believed in you'
  },
  {
    text: `Ever since we became friends and i got to know you I knew straight away how much of a smarter and kind hearted person you are, With any problems you always faced I knew you could always get through them I knew that you could do it because your mika and mika is quite poggers You are the smartest and strongest person I have ever met and With anything that is to come I know everything will be okay no matter what happens you can get through it and i will always be here for as shoulder to cry on, someone to talk to, Someone to fall back on when you need help`,
    background: 'prompt-three.webp',
    button: 'Corny poem dont judge'
  },
  {
    text: `In a isolated and cold universe you are the stars in the sky giving light and warmth to each planet orbiting near you
though darkness surrounds this universe you are the stars thats shine brighter then anything else`,
    background: 'prompt-four.webp',
    button: 'Final page heh'
  },
  {
    text: `congratsulations mika im so proud of you`,
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
