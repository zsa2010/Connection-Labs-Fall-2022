window.addEventListener('load', function()
{
    console.log('page is loaded');
    //although I watched the video where you can take away the word function and the curly brackets
    //I don't feel comfortable doing that yet 
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
    .then(function(response){
        return response.json()
    })
.then(function(data){
    //this where you can do something with the data
    let fortuneArray = data.results;
    let randomNumber = Math.floor(Math.random()* fortuneArray.length);
    let nameElement = document.getElementById('fortune-prediction');
    nameElement.innerHTML = fortuneArray[randomNumber].name;
})
let button = document.getElementById('pokemon-button');
button.addEventListener('click', function(){
    let inputText = document.getElementById("pokemon-name").value;
   
  
    let API_URL = "https://pokeapi.co/api/v2/pokemon/mew/" + inputText;
    fetch(API_URL)
    .then(response => response.json ())
    .then(data => {
        console.log(data);
    })
    
})

})

