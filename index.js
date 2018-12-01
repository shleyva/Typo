var words = ['hola','perro','gato','estas','son','las','palabras','del','juego', 'edificio', 'jamón', 'sorpresa','comida','barista','techo','conexion','padre']
var score = 0;
var round = 0;
var timer = 0;
var rdm = 0;

function getWord(){
rdm = Math.floor((Math.random() * words.length-1) + 1);
  console.log('Word:                         '      + words[rdm]);
console.log('Random:     ' + rdm)
document.getElementById("printWord").innerHTML = words[rdm];
}


function evaluaPalabra(){
  console.log(this.value === words[rdm]) 
  if (this.value === words[rdm]){
     document.getElementById("printWord").style.color = "Blue";
     score = score + 1;
     round = +1;
     console.log(score);
     document.getElementById("scoreBoard").innerHTML = 'Score:   ' + score;
     words.splice(rdm,1);
    console.log("round: " + round ) 
    console.log(words); 
    getWord();
  }
 
}

var cajadetexto = document.getElementById("cajatexto");
cajatexto.addEventListener('change', evaluaPalabra);
cajatexto.addEventListener('keyup', evaluaPalabra);

getWord();