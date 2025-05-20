const pages = [
  {
    text: "CONGRATS ON GRADUATION MIKAAA IM SO PROUD OF YOU i made you this as a present heh",
    backgroundImage: "background.webp",
  },
  {
    text: "I AM SO PROUD OF YOU. What you have done with school is not possible for anyone other than you...",
    backgroundImage: "page-one.webp",
  },
  {
    text: "You have had no parental help your entire life...",
    backgroundImage: "page-two.webp",
  },
  {
    text: "Ever since we became friends...",
    backgroundImage: "page-three.webp",
  },
  {
    text: "Throughout any stage of our relationship...",
    backgroundImage: "prompt-four.webp",
  },
  {
    text: "In a isolated and cold universe you are the stars in the sky...",
    backgroundImage: "page-5-background.jpg",
  },
];

let currentPage = 0;
const container = document.querySelector(".container");
const textElement = document.getElementById("page-text");
const nextButton = document.getElementById("next-button");
const music = new Audio("Laufey-Magnolia-Official Audio.mp3");
music.loop = true;
music.volume = 0.4;

document.addEventListener("DOMContentLoaded", () => {
  updatePage();
  music.play().catch(() => {
    // On iPhone, requires user interaction
    nextButton.addEventListener("click", () => {
      music.play();
    }, { once: true });
  });
});

function updatePage() {
  const page = pages[currentPage];
  container.style.backgroundImage = `url('${page.backgroundImage}')`;
  textElement.textContent = page.text;
}

nextButton.addEventListener("click", () => {
  currentPage = (currentPage + 1) % pages.length;
  updatePage();
});
