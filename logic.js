var words = ['hola','perro','gato','estas','son','las','palabras','del','juego', 'edificio', 'jamón', 'sorpresa','comida','barista','techo','conexión','pluma','quebrado']
var score = 0;
var round = 0;
var timer = 0;
var rdm = 0;
var ksc = 0;


function getWord(){
rdm = Math.floor((Math.random() * words.length-1) + 1);
  console.log('Word:                         '      + words[rdm]);
console.log('Random:     ' + rdm)
document.getElementById("printWord").innerHTML = words[rdm];
document.getElementById("cajatexto").value ="";
}

function evaluaPalabra(){
  console.log(this.value === words[rdm]) 
  if (this.value === words[rdm]){
     score = score + words[rdm].length;
     round = +1;
     console.log(score);
     document.getElementById("scoreBoard").innerHTML = 'Score:   ' + score;
    words.splice(rdm,1);
    console.log("round: " + round ) 
    console.log(words); 
    getWord();
    wordsLeft();
  } 
}

function wordsLeft(){
  if(words.length === 0){
    document.getElementById("printWord").innerHTML = "Buen Trabajo!";
    document.getElementById("printWord").style.color = 'Green';
   alert("Terminaste!!, Score: " + score + "  Precisión:  " + acc);
  }
}

function keyCount(){
  ksc = ksc + 1
  document.getElementById("keystrokeCount").innerHTML = "Keystrokes: "+ ksc;
  acc = (score/ksc)*100
  document.getElementById("accCount").innerHTML = "Precisión: " + acc + " %";
}

function startTimer(){
  var start = 0
  var elapsed = 0
}

var startBtn = document.getElementById("btnStart");
btnStart.addEventListener('click',getWord);

var cajadetexto = document.getElementById("cajatexto");
cajatexto.addEventListener('change', evaluaPalabra);
cajatexto.addEventListener('keyup', evaluaPalabra);
cajatexto.addEventListener('keyup',keyCount);




