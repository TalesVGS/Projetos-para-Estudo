const calcular = document.querySelector('.calcular')

    calcular.addEventListener('click', function() {
        
    const min = document.querySelector('.valor-min')
    const ini = Number(min.value)
    const max = document.querySelector('.valor-max')
    const final = Number(max.value)
    const cont = document.querySelector('.valor-cont')
    var contador = Number(cont.value)
    const resultado = document.querySelector('.resultado')


        if (min.value.length == 0 || max.value.length == 0 || cont.value.length == 0) {
            resultado.innerHTML = 'Não é possível contar!'
        } else {
            resultado.innerHTML = '<br>Contagem: <br>'
    
            if (contador <= 0) {
                alert('Valor inválido, considerar contar de = 1')
                contador = 1
            }
    
            if (ini < final) {
                for (let i = ini; i <= final; i += contador) {
                    resultado.innerHTML += ` ${i} =>`
                }
            } else {
                for (let i = ini; i >= final; i -= contador) {
                    resultado.innerHTML += ` ${i} =>`
                }
            }
    
            resultado.innerHTML += ` Fim`
        }
    
    })

    

