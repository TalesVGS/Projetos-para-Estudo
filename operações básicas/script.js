function somar() {
    var n1 = Number(document.getElementById('soma').value)
    var n2 = Number(document.getElementById('soma2').value)
    var res = document.querySelector('div.soma div.res')

    var somar = n1 + n2 

    res.innerHTML = `O resultado da soma é ${somar}!`    
}

function subtrair() {
    var n1 = Number(document.getElementById('subt').value)
    var n2 = Number(document.getElementById('subt2').value)
    var res = document.querySelector('div.subt div.res')

    var subtrair = n1 - n2 

    res.innerHTML = `O resultado da subtração é ${subtrair}!`    
}

function multiplicar() {
    var n1 = Number(document.getElementById('mult').value)
    var n2 = Number(document.getElementById('mult2').value)
    var res = document.querySelector('div.mult div.res')

    var mult = n1 * n2 

    res.innerHTML = `O resultado da multiplicação é ${mult}!`    
}

function dividir() {
    var n1 = Number(document.getElementById('divis').value)
    var n2 = Number(document.getElementById('divis2').value)
    var res = document.querySelector('div.divis div.res')

    var divis = n1 / n2 

    res.innerHTML = `O resultado da divisão é ${divis}!`    
}