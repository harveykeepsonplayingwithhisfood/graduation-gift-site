const pages = [
  {
    text: "CONGRATS ON GRADUATION MIKAAA IM SO PROUD OF YOU i made you this as a present heh",
    backgroundImage: "background.webp",
  },
  {
    text: "I AM SO PROUD OF YOU. What you have done with school is not possible for anyone other than you, It blows me mind to see how much you have achieved you worked so hard for this mika this wasn't a " academic comeback" what you did is so much more you came back to school after not going much and you did all the work you had to do you caught up and you thrived no matter your physical health your mental health you went back and you did it all it would be been so hard but you did it and i always knew you could do it",
    backgroundImage: "prompt-one.webp",
  },
  {
    text: "You have had no parental help your entire life you've always had to be independant and yet here you are, A highschool graduate who got accepted into university and is moving in with there best friend and is in a commited relationship with someone they love dearly, Im so happy to see everything going well for you you deserve everything in my eyes and Im happy to be here to witness you blossom like the flower you are you mean the world to me, You mean fourth dimensional space time to me",
    backgroundImage: "prompt-two.webp",
  },
  {
    text: "Ever since we became friends and i got to know you I knew straight away how much of a smarter and kind hearted person you are, With any problems you always faced I knew you could always get through them I knew that you could do it because your mika and mika is quite poggers You are the smartest and strongest person I have ever met and With anything that is to come I know everything will be okay no matter what happens you can get through it and i will always be here for as shoulder to cry on",
    backgroundImage: "prompt-three.webp",
  },
  {
    text: "Throughout any stage of our relationship I have always had a soft spot for you, your the only exception and I will always have a soft spot for you because your you and no one would ever be you your so special your one of a kind and im so happy and blessed to have you in my life, And our son toriko(50/50 custody)",
    backgroundImage: "prompt-four.webp",
  },
  {
    text: "In a isolated and cold universe you are the stars in the sky giving light and warmth to each planet orbiting near you
though darkness surrounds this universe you are the stars thats shine brighter then anything else
you are the warmth and the light, a guiding sky in my life",
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
    // Wait for user interaction to start music on iPhone
    nextButton.addEventListener("click", () => {
      music.play();
    }, { once: true });
  });
});

function updatePage() {
  const page = pages[currentPage];
  container.style.backgroundImage = `url('${page.backgroundImage}')`;
  textElement.textContent = page.text;

  container.classList.remove("fade");
  void container.offsetWidth; // Force reflow
  container.classList.add("fade");
}

nextButton.addEventListener("click", () => {
  currentPage = (currentPage + 1) % pages.length;
  updatePage();
});
