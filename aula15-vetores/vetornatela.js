let valores = [8,1,7,4,2,9]
valores.sort()
console.log(valores)


/* FOR
for (let pos = 0 ; pos < valores.length ; pos++) {
    console.log(`Posição ${pos}`) imprime a posição (índice)
    console.log(`Valor ${valores[pos]}`) imprime o valor
    console.log(`Na posição ${pos} o valor é ${valores[pos]}`) imprime posição e valor
} */

//FOR IN
for (let pos in valores) { //essa sintáse do for so serve para Array e Objetos
    console.log(`Na posição ${pos} o valor é ${valores[pos]}`)    
}

console.log(`O Valor 1 está na posição ${valores.indexOf(1)}`)

