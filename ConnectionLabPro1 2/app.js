window.addEventListener('load', function () {
	console.log('page is loaded')
	//although I watched the video where you can take away the word function and the curly brackets
	//I don't feel comfortable doing that yet
	let nameElement = document.getElementById('fortune-prediction')
	let fortuneAnimal = document.querySelector('#fortune-animal')
	fetch('animals.json')
		.then(function (response) {
			return response.json()
		})
		.then(function (data) {
			//this where you can do something with the data
			console.log(data.animals)
			let fortuneArray = data.animals
			//this code below until line 20 if to roll the dice
			let dice = document.querySelector('.rollDice')
			dice.addEventListener('click', function () {
				let diceRoll = Math.ceil(Math.random() * 6)
				nameElement.innerHTML = diceRoll
			})
			let cards = document.querySelectorAll('.animalCard')
			for (let i = 0; i < cards.length; i++) {
				cards[i].addEventListener('click', getRandomAnimal)
			}
			function getRandomAnimal() {
				let randomNumber = Math.floor(
					Math.random() * fortuneArray.length
				)
				fortuneAnimal.innerHTML = fortuneArray[randomNumber]
			}

			let diceRoll = Math.floor(Math.random() * 6)
			// nameElement.innerHTML = fortuneArray[randomNumber].name;
		})

	let nameElement2 = document.getElementById('emoji-database')
	let emojicard = document.querySelector('emoji-prediction')
	let emojiFortune = document.querySelector('#emoji-fortune')
	let emojiLink = document.querySelector('#emojiLink')

	fetch('https://api.github.com/emojis')
		.then(function (response) {
			return response.json()
		})

		.then(function (data) {
			//console.log(Object.keys(data));
			let length = Object.keys(data).length
			let arrData = Object.keys(data)
			console.log(Object.keys(data))
			//I need to attempt to do something with data here ideally I want to randomize
			//the emojis like the pokemon
			let cards = document.querySelectorAll('.colorCard')
			console.log(cards)
			for (let i = 0; i < cards.length; i++) {
				cards[i].addEventListener('click', getRandomEmoji)
			}
			function getRandomEmoji() {
				let randomEmoji = Math.floor(Math.random() * length)
				//emojiFortune.innerHTML = data[arrData[randomEmoji]]
				emojiLink.src = data[arrData[randomEmoji]]
				console.log(data[arrData[randomEmoji]])
			}
		})

	// let button = document.getElementById('pokemon-button');
	// button.addEventListener('click', function(){
	//     let inputText = document.getElementById("pokemon-name").value;

	//     let API_URL = "https://pokeapi.co/api/v2/pokemon/mew/" + inputText;
	//     fetch(API_URL)
	//     .then(response => response.json ())
	//     .then(data => {
	//         console.log(data);
	//     })

	// })
})

function windowResized() {
	resizeCanvas(windowWidth, windowHeight * 1.5)
}

let bg;
let y = 0;
function setup() {
	bg = loadImage('Background_Fortune_Project.jpg')
	const myCanvas = createCanvas(windowWidth, windowHeight * 1.5)
	myCanvas.parent('canvas-container')
	background(bg)
}

function draw() {
	//background(200);
	stroke(177, 156, 217)
	line(0, y, width, y)

	y++
	if (y > height * 1.5) {
		y = 0
	}
}




// function mouseMoved() {
// 	noStroke();
// 	fill(255, 255, 255, 20)
// 	ellipse(mouseX, mouseY, 70, 70);
// }
