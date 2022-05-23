var readlineSync = require("readline-sync")
console.log(   MICROONDAS  );

function tempoPadrao(){
let tempoPipoca = 10
let tempoMacarrão = 8
let tempoCarne = 15
let tempoFeijão = 12
let tempoBrigadeiro = 8
}

let prato= readlineSync.question(`
Escolha o seu prato:
-------------------------------------------------------
      1 - Pipoca             
      2 - Macarrão          
      3 - Carne
      4 - Feijão
      5 - Brigadeiro
------------------------------------------------------
`);
function microondas(prato, tempo){
  console.log(prato, tempo)
};

if(tempo>=tempoPadrao){
  console.log ("Seu prato está pronto!Bom apetite ;)")
} else if (tempo>=tempoPadrao*2){
  console.log ("Sua comida queimou! :(")
} else if (tempo>=tempoPadrao*3){
  console.log ("KABUMMM!! :o")
} else if(tempo<tempoPadrao){
  console.log("Tempo insuficiente! :/")
} else if(prato>5){
  console.log("Prato inexistente")
} else{"Bug"}
  


