function contar() {
    let inicio = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('[ERRO] Necessário preencher todos os campos!')
    } else {
        res.innerHTML = 'Resultado: <br>'
        res.style.background = 'gray'
        res.style.color = 'white'
        res.style.textAlign = 'center'
        res.style.borderRadius = '5px'
        res.style.fontWeight = 'bolder'
        res.style.padding = '10px'

        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(p <= 0 ) {
            alert('Campo "PASSO" inválido, será inserido o número 1.')
            p = 1
        }

        if(i < f) {
            for(let c = i; c < f; c += p) {
               res.innerHTML += `${c} \u{1f448}`
            }
        } else {
            for(c = i; c > f; c -= p) {
                res.innerHTML += `${c} \u{1f448}`
            }
        }      
    }
}