let num = +prompt("Insira um número e veja toda a sua tabuada")
let tabuada = [1,2,3,4,5,6,7,8,9,10]

for (x in tabuada){
    x++
    console.log(`${num} x ${x} = ${num*x}`) 
}
