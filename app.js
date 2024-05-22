const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const title = document.querySelector("h1");
const button = document.querySelector("button");

function startGame() {
  const rendomNumber1 = Math.floor(Math.random() * 6) + 1;
  const rendomNumber2 = Math.floor(Math.random() * 6) + 1;

  img1.src = `./images/dice${rendomNumber1}.png`;
  img2.src = `./images/dice${rendomNumber2}.png`;

  if (rendomNumber1 > rendomNumber2) {
    title.textContent = "Player 1 Win";
  } else if (rendomNumber1 < rendomNumber2) {
    title.textContent = "Player 2 Win";
  } else {
    title.textContent = "Drow";
  }
}

startGame();
button.addEventListener("click", startGame);
