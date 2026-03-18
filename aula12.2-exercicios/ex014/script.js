function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
   
    msg.innerHTML = `Agora são, aproximadamente, ${hora} horas! <br>`    

    if (hora >= 0 && hora < 12) {
        msg.innerHTML += 'Bom dia!'
        img.src = 'manha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        msg.innerHTML += 'Boa tarde'
        img.src = 'tarde.png'
        document.body.style.background = '#b9846f'
    } else {
        msg.innerHTML += 'Boa Noite!'
        img.src = 'noite.png'
        document.body.style.background = '#515154'
    }
}