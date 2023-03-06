(() => {
  const playerOneTxt = document.querySelector(".playerOne");
  const playerTwoTxt = document.querySelector(".playerTwo");
  const leftDiv = document.querySelector(".left-div");
  const rightDiv = document.querySelector(".right-div");
  const p1Img = document.querySelector(".playerOneImg");
  const p2Img = document.querySelector(".playerTwoImg");
  const p1Inp = document.querySelector("#playerOneAns");
  const p2Inp = document.querySelector("#playerTwoAns");
  const formOne = document.querySelector(".form1");
  const formTwo = document.querySelector(".form2");
  const h2 = document.querySelector(".fP");
  const resetBtn = document.querySelector(".button-6");
  let forHidingNum = 0;

  //  ________________________ ALL Functions ________________________

  //  input string lowerCase validating
  function validating(inputValue) {
    const allowedValues = ["rock", "paper", "scissor"];
    const lowercaseValue = inputValue.toLowerCase();

    if (allowedValues.includes(lowercaseValue)) {
      return lowercaseValue;
    } else {
      h2.textContent = `It is time for next player to write!! AND Only Rock, Paper, Scissor values are allowed.
      (if put/putted any wrong value please reset or game will not work)
      `;
      return null;
    }
  }
  function p1ImgLoader(newValue) {
    if (newValue === "rock") {
      p1Img.removeAttribute("src");
      p1Img.setAttribute("src", "https://rb.gy/qhjcmh");
    } else if (newValue === "paper") {
      p1Img.removeAttribute("src");
      p1Img.setAttribute("src", "https://rb.gy/drs2i8");
    } else if (newValue === "scissor") {
      p1Img.removeAttribute("src");
      p1Img.setAttribute("src", "https://rb.gy/cegmwy");
    }
  }
  function p2ImgLoader(newValue) {
    if (newValue === "rock") {
      p2Img.removeAttribute("src");
      p2Img.setAttribute("src", "https://rb.gy/qhjcmh");
    } else if (newValue === "paper") {
      p2Img.removeAttribute("src");
      p2Img.setAttribute("src", "https://rb.gy/drs2i8");
    } else if (newValue === "scissor") {
      p2Img.removeAttribute("src");
      p2Img.setAttribute("src", "https://rb.gy/cegmwy");
    }
  }
  function resetAll() {
    p1Inp.value = "";
    p2Inp.value = "";
    h2.textContent = "Lets'play";
    p1Img.removeAttribute("src");
    p2Img.removeAttribute("src");
    p1Img.setAttribute("src", "https://rb.gy/z1hqgl");
    p2Img.setAttribute("src", "https://rb.gy/z1hqgl");
    leftDiv.classList.remove("draw");
    rightDiv.classList.remove("draw");
    playerOneTxt.classList.remove("winner-border");
    playerTwoTxt.classList.remove("winner-border");
    playerOneTxt.classList.remove("winner-anim");
    playerTwoTxt.classList.remove("winner-anim");
    leftDiv.classList.remove("winner");
    rightDiv.classList.remove("winner");
    leftDiv.classList.remove("loser");
    rightDiv.classList.remove("loser");
  }
  function winnerFinder(newValueP1, newValueP2) {
    if (newValueP1 === newValueP2) {
      leftDiv.classList.add("draw");
      rightDiv.classList.add("draw");
      h2.textContent = "DRAW!!";
    } else if (newValueP1 === "rock" && newValueP2 === "paper") {
      playerTwoTxt.classList.add("winner-border");
      playerTwoTxt.classList.add("winner-anim");
      leftDiv.classList.add("loser");
      rightDiv.classList.add("winner");
      h2.textContent = "PLAYER 2 WINS!!!";
    } else if (newValueP1 === "paper" && newValueP2 === "rock") {
      playerOneTxt.classList.add("winner-border");
      playerOneTxt.classList.add("winner-anim");
      leftDiv.classList.add("winner");
      rightDiv.classList.add("loser");
      h2.textContent = "PLAYER 1 WINS!!!";
    } else if (newValueP1 === "scissor" && newValueP2 === "rock") {
      playerTwoTxt.classList.add("winner-border");
      playerTwoTxt.classList.add("winner-anim");
      leftDiv.classList.add("loser");
      rightDiv.classList.add("winner");
      h2.textContent = "PLAYER 2 WINS!!!";
    } else if (newValueP1 === "rock" && newValueP2 === "scissor") {
      playerOneTxt.classList.add("winner-border");
      playerOneTxt.classList.add("winner-anim");
      leftDiv.classList.add("winner");
      rightDiv.classList.add("loser");
      h2.textContent = "PLAYER 1 WINS!!!";
    } else if (newValueP1 === "scissor" && newValueP2 === "paper") {
      playerOneTxt.classList.add("winner-border");
      playerOneTxt.classList.add("winner-anim");
      leftDiv.classList.add("winner");
      rightDiv.classList.add("loser");
      h2.textContent = "PLAYER 1 WINS!!!";
    } else if (newValueP1 === "paper" && newValueP2 === "scissor") {
      playerTwoTxt.classList.add("winner-border");
      playerTwoTxt.classList.add("winner-anim");
      leftDiv.classList.add("loser");
      rightDiv.classList.add("winner");
      h2.textContent = "PLAYER 2 WINS!!!";
    }
  }
  //  ________________________ ALL Eventlistener ________________________

  // player one form
  formOne.addEventListener("submit", (e) => {
    e.preventDefault();
    const inpValueP1 = p1Inp.value;
    const newValueP1 = validating(inpValueP1);
    const inpValueP2 = p2Inp.value;
    const newValueP2 = validating(inpValueP2);
    forHidingNum++;
    if (forHidingNum === 2) {
      p1ImgLoader(newValueP1);
      p2ImgLoader(newValueP2);
      forHidingNum = 0;
    }
    winnerFinder(newValueP1, newValueP2);
  });

  // player two form
  formTwo.addEventListener("submit", (e) => {
    e.preventDefault();
    const inpValueP1 = p1Inp.value;
    const newValueP1 = validating(inpValueP1);
    const inpValueP2 = p2Inp.value;
    const newValueP2 = validating(inpValueP2);
    forHidingNum++;
    if (forHidingNum === 2) {
      p1ImgLoader(newValueP1);
      p2ImgLoader(newValueP2);
      forHidingNum = 0;
    }
    winnerFinder(newValueP1, newValueP2);
  });
  resetBtn.addEventListener("click", (e) => {
    resetAll();
  });

  // Code Ended (Written By RNS)
})();
