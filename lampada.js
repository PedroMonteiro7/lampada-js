"use strict"

function lampadaQuebrada() {
    const lampada = document.getElementById('lampada')
    return lampada.src.indexOf('quebrada') !== -1 //indexOf procura uma String dentro de um caminho
}

function ligarLampada() {
    const lampada = document.getElementById('lampada')
    const botaoLigar = document.getElementById('ligar')
    const botaoDesligar = document.getElementById('desligar')

    if (!lampadaQuebrada()) {
    lampada.src = "img/ligada.jpg"
    botaoLigar.disabled = true
    botaoDesligar.disabled = false
    }
}

function desligarLampada() {
    const lampada = document.getElementById('lampada')
    const botaoLigar = document.getElementById('ligar')
    const botaoDesligar = document.getElementById('desligar')

    if (!lampadaQuebrada()) {
    lampada.src = "img/desligada.jpg"
    botaoLigar.disabled = false
    botaoDesligar.disabled = true
    }
}

function quebrarLampada() {
    const lampada = document.getElementById('lampada')
    lampada.src = "img/quebrada.jpg"
    botaoLigar.disabled = true
    botaoDesligar.disabled = true
}

// eventos
document.getElementById('ligar').addEventListener('click', ligarLampada)
document.getElementById('desligar').addEventListener('click', desligarLampada)
document.getElementById('lampada').addEventListener('mouseover', ligarLampada)
document.getElementById('lampada').addEventListener('mouseleave', desligarLampada)
document.getElementById('lampada').addEventListener('dblclick', quebrarLampada)