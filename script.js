let num = document.getElementById('txt01')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }

}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }

}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} foi adicionado`
        lista.appendChild(item)
        res.innerHTML = ''

    }else{
        alert('Valor inválido ou já encontrado na lista')
    }
    num.value = ''
    num.focus() // colocar o foco no input; limpar e esperar outro valor
}

function vMaior(p){
    let maior = p[0]
        for(let c = 0; c <= p.length ; c++){
            if(p[c] > maior){
               maior = p[c]
            }
        } 
     return maior
}

function vMenor(p){
    let menor = p[0]
        for(let c = 0; c <= p.length ; c++){
            if(p[c] < menor){
                menor = p[c]
            }
        } 
     return menor
}

function finalizar(){
    if(valores.length == 0){
        alert('Adicione valores antes de finalizar')
    }else{
        let tot = valores.length
        let soma = 0
        let media = 0

        for(let pos in valores){
            soma += valores[pos]
        }

        media = soma / tot

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} elementos</p>`
        res.innerHTML += `<p>O maior valor é ${vMaior(valores)}</p>`
        res.innerHTML += `<p>O menor valor é ${vMenor(valores)}</p>`
        res.innerHTML += `<p>A soma de todos os valores é ${soma}</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}</p>`
    }
}