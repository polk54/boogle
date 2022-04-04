// setup
// has all the functions for randomly picking a letter
// has the same letter distribution as classic Boggle

function playGame() {
  var randomNumber = Math.floor(Math.random()*(words.length));
  document.getElementById("letterDisplay1").innerHTML = words[randomNumber];

  var randomNumber = Math.floor(Math.random()*(words.length));
  document.getElementById("letterDisplay2").innerHTML = words[randomNumber];

  var randomNumber = Math.floor(Math.random()*(words.length));
  document.getElementById("letterDisplay3").innerHTML = words[randomNumber];

  var randomNumber = Math.floor(Math.random()*(words.length));
  document.getElementById("letterDisplay4").innerHTML = words[randomNumber];

  var randomNumber = Math.floor(Math.random()*(words.length));
  document.getElementById("letterDisplay5").innerHTML = words[randomNumber];

  var randomNumber = Math.floor(Math.random()*(words.length));
  document.getElementById("letterDisplay6").innerHTML = words[randomNumber];

  var randomNumber = Math.floor(Math.random()*(words.length));
  document.getElementById("letterDisplay7").innerHTML = words[randomNumber];

  var randomNumber = Math.floor(Math.random()*(words.length));
  document.getElementById("letterDisplay8").innerHTML = words[randomNumber];

  var randomNumber = Math.floor(Math.random()*(words.length));
  document.getElementById("letterDisplay9").innerHTML = words[randomNumber];

  var randomNumber = Math.floor(Math.random()*(words.length));
  document.getElementById("letterDisplay10").innerHTML = words[randomNumber];

  var randomNumber = Math.floor(Math.random()*(words.length));
  document.getElementById("letterDisplay11").innerHTML = words[randomNumber];

  var randomNumber = Math.floor(Math.random()*(words.length));
  document.getElementById("letterDisplay12").innerHTML = words[randomNumber];

  var randomNumber = Math.floor(Math.random()*(words.length));
  document.getElementById("letterDisplay13").innerHTML = words[randomNumber];

  var randomNumber = Math.floor(Math.random()*(words.length));
  document.getElementById("letterDisplay14").innerHTML = words[randomNumber];

  var randomNumber = Math.floor(Math.random()*(words.length));
  document.getElementById("letterDisplay15").innerHTML = words[randomNumber];

  var randomNumber = Math.floor(Math.random()*(words.length));
  document.getElementById("letterDisplay16").innerHTML = words[randomNumber];
}

var words = "EEEEEEEEEEAAAAAAAAIIIIIIIOOOOOOLLLLLNNNNNSSSSSTTTTTDDDDRRRRUUUUBBBCCCGGGHHHMMMPPPYYYFFKKVVWWJQXS"
