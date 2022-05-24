
console.log(`
BEM-VINDO AO MICROONDAS:

1 - PIPOCA
2 - MACARRÃO
3 - CARNE
4 - FEIJÃO
5 - BRIGADEIRO
`);

let pratos = ['PIPOCA', 'MACARRÃO', 'CARNE', 'FEIJÃO', 'BRIGADEIRO']
let tempoPratos = [ 10, 8, 15, 12, 8]
 
let tempo = ''

console.log ("Escolha um prato:");

function Cozimento(){
  pratos = tempoPratos
  pratos = tempo
};


      if(tempo>=tempoPratos){
        console.log ("Seu prato está pronto!Bom apetite ;)")
      } else if (tempo>=tempoPratos*2){
        console.log ("Sua comida queimou! :(")
      } else if (tempo>=tempoPratos*3){
        console.log ("KABUMMM!! :o")
      } else if(tempo<tempoPratos){
        console.log("Tempo insuficiente! :/")
      } else if(pratos>4){
        console.log("Prato inexistente")
      } else{"Bug"}
        
      
