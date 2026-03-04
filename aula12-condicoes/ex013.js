var agora = new Date()
var diaSem = agora.getDay()

switch (diaSem) {
    case 1:
        console.log('Segunda-Feira: Virado a Paulista')
        break

    case 2:
        console.log('Terça-Feira: Macarronada')
        break
    
    case 3:
        console.log('Quarta-Feira: Feijoada')
        break

    case 4:
        console.log('Quinta-Feira: Peixe')
        break

    case 5:
        console.log('Sexta-Feira: A Sua Escolha')
        break
    
    case 6:
        console.log('Sábado: Feijoada')
        break

    case 0:
        console.log('Domingo: Fechado')

    default:
}