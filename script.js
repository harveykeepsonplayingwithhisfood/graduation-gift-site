const pages = [
  {
    text: "CONGRATS ON GRADUATION MIKAAA IM SO PROUD OF YOU i made you this as a present heh",
    background: "background.webp",
    button: "Click this dumdum"
  },
  {
    text: `I AM SO PROUD OF YOU. What you have done with school is not possible for anyone other than you, It blows me mind to see how much you have achieved you worked so hard for this mika this wasn't a " academic comeback" what you did is so much more you came back to school after not going much and you did all the work you had to do you caught up and you thrived no matter your physical health your mental health you went back and you did it all it would be been so hard but you did it and i always knew ...`,
    background: "Page-one.webp",
    button: "Graduating highschool and going to university"
  },
  {
    text: `You have had no parental help your entire life you've always had to be independant and yet here you are, A highschool graduate who got accepted into university and is moving in with there best friend and is in a commited relationship with someone they love dearly, Im so happy to see everything going well for you you deserve everything in my eyes and Im happy to be here to witness you blossom like the flower you are you mean the world to me, You mean fourth dimensional space time to me and i lo...`,
    background: "Page-two.webp",
    button: "I have and always will believe in you"
  },
  {
    text: `Ever since we became friends and i got to know you I knew straight away how much of a smarter and kind hearted person you are, With any problems you always faced I knew you could always get through them I knew that you could do it because your mika and mika is quite poggers You are the smartest and strongest person I have ever met and With anything that is to come I know everything will be okay no matter what happens you can get through it and i will always be here for as shoulder to cry on, s...`,
    background: "Page-three.webp",
    button: "You mean sm to me"
  },
  {
    text: `Throughout any stage of our relationship I have always had a soft spot for you, your the only exception and I will always have a soft spot for you because your you and no one would ever be you your so special your one of a kind and im so happy and blessed to have you in my life, And our son toriko(50/50 custody)`,
    background: "prompt-four.webp",
    button: "Corny poem"
  },
  {
    text: `In a isolated and cold universe you are the stars in the sky giving light and warmth to each planet orbiting near you
though darkness surrounds this universe you are the stars thats shine brighter then anything else
you are the warmth and the light, a guiding sky in my life`,
    background: "page-5-background.jpg",
    button: "Restart:3"
  }
];

const container = document.getElementById('pageContainer');
const textContent = document.getElementById('pageText');
const nextBtn = document.getElementById('nextBtn');
const bgMusic = document.getElementById('bgMusic');
const starCanvas = document.getElementById('starCanvas');
const ctx = starCanvas.getContext('2d');

let currentPage = 0;

// Preload backgrounds
pages.forEach(page => {
  const img = new Image();
  img.src = page.background;
});

function setPage(index) {
  const page = pages[index];
  container.style.backgroundImage = `url('${page.background}')`;
  textContent.textContent = page.text;
  nextBtn.textContent = page.button;
}

function nextPage() {
  currentPage++;
  if (currentPage >= pages.length) currentPage = 0;
  setPage(currentPage);
  animateFlip();
}

function animateFlip() {
  container.style.animation = 'none';
  // trigger reflow
  container.offsetHeight; 
  container.style.animation = null;
}

nextBtn.addEventListener('click', () => {
  nextPage();
  if (bgMusic.paused) bgMusic.play();
});

window.addEventListener('resize', resizeCanvas);

function resizeCanvas() {
  starCanvas.width = window.innerWidth;
  starCanvas.height = window.innerHeight;
}

function createStars(count) {
  let stars = [];
  for (let i = 0; i < count; i++) {
    stars.push({
      x: Math.random() * starCanvas.width,
      y: Math.random() * starCanvas.height,
      radius: Math.random() * 1.5 + 0.5,
      speed: Math.random() * 0.2 + 0.05,
      opacity: Math.random()
    });
  }
  return stars;
}

let stars = [];
resizeCanvas();
stars = createStars(150);

function animateStars() {
  ctx.clearRect(0, 0, starCanvas.width, starCanvas.height);
  stars.forEach(star => {
    star.y -= star.speed;
    if (star.y < 0) star.y = starCanvas.height;
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
    ctx.fill();
  });
  requestAnimationFrame(animateStars);
}

animateStars();
setPage(currentPage);
