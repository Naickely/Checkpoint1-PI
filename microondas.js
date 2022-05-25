var readlineSync = require("readline-sync")

console.log(MICROONDAS);

function tempoPadrao(){
let tempoPipoca = 10
let tempoMacarrão = 8
let tempoCarne = 15
let tempoFeijão = 12
let tempoBrigadeiro = 8
}

let prato= readlineSync.question(`
Selecione uma opcao:
      1.Pipoca             
      2.Macarrão          
      3.Carne
      4.Feijão
      5.Brigadeiro 
`);

let tempoEscolhido = readlineSync.question(`Escolha um tempo...`);

microondas(opcao, tempoEscolhido);

function microondas(prato, tempo){
    let padrao = 0;
    
    switch (prato){
      case '1':
          padrao = tempoPipoca;
          break;
      case '2':
          padrao = tempoMacarrão;
          break;
      case '3':
          padrao = tempoCarne;
          break;
      case '4':
          padrao = tempoFeijão;
          break;
      case '5':
          padrao = tempoBrigadeiro;
          break;
      default:
          console.log("Escolha uma opção");
      }
        
  
      if(tempoEscolhido>=prato){
      console.log ("Seu prato está pronto!Bom apetite ;)")
      } else if (tempoEscolhido>=prato*2){
      console.log ("Sua comida queimou! :(")
      } else if (tempoEscolhido>=prato*3){
      console.log ("KABUMMM!! :o")
      } else if(tempoEscolhido<prato){
      console.log("Tempo insuficiente! :/")
      } else if(prato>5){
      console.log("Prato inexistente")
      } else {
          console.log("buggg");
      }
  }