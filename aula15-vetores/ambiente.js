let num = [5,8,9]
num[3] = 6 //acrescentando o valor 6 no índice 3
num.push(7) //acrescentando valor na última posição de um Array
num.length //saber o comprimento do vetor (no nosso caso são 5 (0,1,2,3,4))
num.sort() //organiza os elementos em ordem crescente
console.log(num)
console.log(`o Vetor tem ${num.length} posições`)
console.log(`Na primeira é o número ${num[0]}`)
for (let pos = 0 ; pos < num.length ; pos++) {
    console.log(`usando a estrutura for ${num[pos]}`)
} 