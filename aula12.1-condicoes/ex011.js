var idade = 11
if (idade >= 18) {
    console.log ('Você é maior de idade')
} else {
    if (idade < 18 && idade >= 15) {
        console.log ('Você é um adolescente')
    } else {
        if (idade < 15 && idade >= 12) {
            console.log ('Você é um pré-adolescente')
        } else {
            console.log ('Você é uma criança')
        }
    }
}