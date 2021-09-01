"use strict"

let idLigar
let idDesligar

const pararDePiscar = () => {
    clearInterval(idLigar)
    clearInterval(idDesligar)
}

// function id(elemento) {
//     return document.getElementById(elemento)
// }

const id = (elemento) => document.getElementById(elemento)

const botoesLigaDesligaPisca = (estadoLiga, estadoDesliga, estadoPisca) => {
    const botaoLigar = document.getElementById('ligar')
    const botaoDesligar = document.getElementById('desligar')
    const botaoPiscar = document.getElementById('piscar')
    botaoLigar.disabled = estadoLiga
    botaoDesligar.disabled = estadoDesliga
    botaoPiscar.disabled = estadoPisca
}

// function lampadaQuebrada() {
//     const lampada = document.getElementById('lampada')
//     return lampada.src.indexOf('quebrada') !== -1 //indexOf procura uma String dentro de um caminho
// }

const lampadaQuebrada = () => lampada.src.includes('quebrada')

const ligarLampada = () => {
    const lampada = document.getElementById('lampada')

    if (!lampadaQuebrada()) {
    lampada.src = "img/ligada.jpg"
    botoesLigaDesligaPisca(true, false, false)
    }
}

const desligarLampada = () => {
    const lampada = document.getElementById('lampada')

    if (!lampadaQuebrada()) {
    lampada.src = "img/desligada.jpg"
    botoesLigaDesligaPisca(false, true, false)
    }
}

const quebrarLampada = () => {
    const lampada = document.getElementById('lampada')

    lampada.src = "img/quebrada.jpg"
    botoesLigaDesliga(true, true, true)
}

const piscarLampada = () => {
    const botaoPiscar = document.getElementById('piscar')

    if (botaoPiscar.textContent == 'Piscar') {
    idLigar = setInterval(ligarLampada, 500)
    idDesligar = setInterval(desligarLampada, 1000)
    botaoPiscar.textContent = 'Parar'
    } else {
        pararDePiscar()
        botaoPiscar.textContent = 'Piscar'
    }   
}

// eventos
id('ligar').addEventListener('click', ligarLampada)
id('desligar').addEventListener('click', desligarLampada)
id('lampada').addEventListener('mouseover', ligarLampada)
id('lampada').addEventListener('mouseleave', desligarLampada)
id('lampada').addEventListener('dblclick', quebrarLampada)
id('piscar').addEventListener('click', piscarLampada)