window.addEventListener('load', function()
{
    console.log('page is loaded');
    //although I watched the video where you can take away the word function and the curly brackets
    //I don't feel comfortable doing that yet 
    let nameElement = document.getElementById('fortune-prediction');
    let fortuneAnimal = document.querySelector('#fortune-animal')
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
    .then(function(response){
        return response.json()
    })
.then(function(data){
    //this where you can do something with the data
    console.log(data)
    let fortuneArray = data.results;
    let dice = document.querySelector('.rollDice')
    dice.addEventListener('click', function(){
        let diceRoll = Math.ceil(Math.random() * 6)
        nameElement.innerHTML = diceRoll

})
let cards = document.querySelectorAll('.animalCard')
for(let i =0; i< cards.length; i++){
    cards[i].addEventListener('click', getRandomAnimal)
}
function getRandomAnimal(){
    let randomNumber = Math.floor(Math.random()*
    fortuneArray.length)
    fortuneAnimal.innerHTML = fortuneArray[randomNumber].name
}
  
    let diceRoll = Math.floor(Math.random() * 6) 
   // nameElement.innerHTML = fortuneArray[randomNumber].name;
})


let nameElement2 = document.getElementById('emoji-database');
let emojicard = document.querySelector('emoji-prediction');
fetch("https://api.github.com/emojis");
.then(function(response){
    return response.json()
})

.then(function(data){
   //I need to attempt to do something with data here ideally I want to randomize 
   //the emojis like the pokemon  
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

