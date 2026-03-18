function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var fano = Number(fano.value)
    var res = document.querySelector('#res')
    
    if(fano == 0 || fano > ano ) {
        alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('txtsex')
        var idade = ano - fano
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.style.borderRadius = '150px'
        
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade <= 10) {
                img.setAttribute('src', 'homem-crianca.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'homem-jovem.png')
            } else if (idade < 55) {
                img.setAttribute('src', 'homem-adulto.png')
            } else {
                img.setAttribute('src', 'homem-idoso.png')
            }
            
        } else {
            gênero = 'Mulher'
            if (idade >= 0 && idade <= 10) {
                img.setAttribute('src', 'mulher-crianca.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'mulher-jovem.png')
            } else if (idade < 55) {
                img.setAttribute('src', 'mulher-adulta.png')
            } else {
                img.setAttribute('src', 'mulher-idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)        
    }    
}