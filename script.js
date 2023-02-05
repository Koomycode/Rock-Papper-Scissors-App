const playerName = document.getElementById("player-name");
const submit = document.getElementById("submit");
const playerOne = document.getElementById("player-one");
const startBtn = document.getElementById("start");
const playerResultEl = document.getElementById("player-result");
const aiResultEl = document.getElementById("ai-result");
const messageEl = document.getElementById("message");
const playerEmoji = document.getElementById("player-emoji");
const aiEmoji = document.getElementById("ai-emoji");

let hands = ["Rock", "Papper", "Scissors"];
let number = 0;
let result = "";
let aiResult = "";
let message = "";
let hasWon = false;
let hasLost = false;

submit.addEventListener("click", function () {
	let name = playerName.value;
	playerOne.textContent = name;
});

$(playerName).keypress(function(event) {
	if (event.keyCode === 13) {
		$(submit).click();
	}
});

$(submit).click(function() {
	let name = playerName.value;
	playerOne.textContent = name;
});

function rollDice() {
	number = Math.floor(Math.random() * 3);
	return hands[number];
}

function renderGame() {
	result = rollDice();
	aiResult = rollDice();

	if (result === hands[0] && aiResult === hands[1]) {
		result = `<img src="rock.png" alt="">`;
		aiResult = `<img src="papper.png" alt=""></img>`;
		message = "You Lose";
	} else if (result === hands[2] && aiResult === hands[1]) {
		message = "You Win";
		result = `<img src="scissors.png" alt=""></img>`;
		aiResult = `<img src="papper.png" alt=""></img>`;
	} else if (result === hands[0] && aiResult === hands[2]) {
		message = "You Win";
		result = `<img src="rock.png" alt="">`;
		aiResult = `<img src="scissors.png" alt=""></img>`;
	} else if (result === hands[1] && aiResult === hands[0]) {
		message = "You Win";
		result = `<img src="papper.png" alt=""></img>`;
		aiResult = `<img src="rock.png" alt="">`;
	} else if (result === hands[1] && aiResult === hands[2]) {
		message = "You Lose";
		result = `<img src="papper.png" alt=""></img>`;
		aiResult = `<img src="scissors.png" alt=""></img>`;
	} else if (result === hands[2] && aiResult === hands[0]) {
		message = "You Lose";
		result = `<img src="scissors.png" alt=""></img>`;
		aiResult = `<img src="rock.png" alt="">`;
	} else if (result === hands[0] && aiResult === hands[0]) {
		message = "Draw";
		result = `<img src="rock.png" alt="">`;
		aiResult = `<img src="rock.png" alt="">`;
	} else if (result === hands[1] && aiResult === hands[1]) {
		message = "Draw";
		result = `<img src="papper.png" alt=""></img>`;
		aiResult = `<img src="papper.png" alt=""></img>`;
	} else if (result === hands[2] && aiResult === hands[2]) {
		message = "Draw";
		result = `<img src="scissors.png" alt="">`;
		aiResult = `<img src="scissors.png" alt="">`;
	}

	if (message === "You Win") {
		playerEmoji.innerHTML = `<img class="happy" src="./happy-emoji.svg" />`;
		aiEmoji.innerHTML = `<img class="angry" src="./angry (1).svg" />`;
	} else if (message === "You Lose") {
		aiEmoji.innerHTML = `<img class="happy" src="./happy-emoji.svg" />`;
		playerEmoji.innerHTML = `<img class="angry" src="./angry (1).svg" />`;
	} else {
		aiEmoji.innerHTML = `<img class="normal" src="./angry.svg" alt="" />`;
		playerEmoji.innerHTML = `<img class="normal" src="./angry.svg" alt="" />`;
	}

	messageEl.textContent = message;
	playerResultEl.innerHTML = result;
	aiResultEl.innerHTML = aiResult;
}

startBtn.addEventListener("click", function () {
	renderGame();
});
