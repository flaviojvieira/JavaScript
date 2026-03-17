var msg = document.getElementById('msg')
var foto = document.getElementById('foto')
var data = new Date()
var hora = data.getHours()

msg.innerHTML = `Agora são aproximadamente ${hora}hr!<br>`

function carregar() {
    if(hora >= 0 && hora < 12) {
        msg.innerHTML += 'Bom dia!'
        foto.src = "manha.png"
        document.body.style.background = '#dfcfb5'
    } else if (hora >= 12 && hora < 18) {
        msg.innerHTML += 'Boa Tarde'
        foto.src = 'tarde.png'
        document.body.style.background = '#bb8f4d'
    } else {
        msg.innerHTML += 'Boa Noite!'
        foto.src = 'noite.png'
        document.body.style.background = '#895129'
    }
}