let listra = []
let gasto = []
var totalGasto = 0 
let i = 0
const valueFixed = 1140
var saldoFinal = 1140
var newGasto = 0

function displayArray(){
    let viewArray = document.getElementById('viewListra')
    viewArray.innerHTML = listra.join("<br>")
}


function viewSaldo(){
    displayArray()
    saldoFinal = valueFixed - totalGasto 
    document.getElementById('viewSaldo').innerHTML = (`Saldo: ${saldoFinal.toFixed(2)} <br>`)
}

function resetar(){
    saldoFinal = valueFixed
    document.getElementById('viewSaldo').innerHTML = (`Saldo: ${saldoFinal.toFixed(2)} <br>`)
    listra = []
    gasto = []
    i = 0
    displayArray()
}

function addGasto(){
    newGasto = parseFloat(document.getElementById('value').value)
    var newMotivo = document.getElementById('motivo').value
    var newDate = document.getElementById('date').value

    if (newGasto >= 1){
        totalGasto -= newGasto
        i++
        gasto.push(newGasto + 'Gasto')
        listra.push(`${i} - Gasto:<br> Motivo: ${newMotivo} <br> Gasto: R$ ${newGasto.toFixed(2)} <br> Em: ${newDate}<br>`);
        viewSaldo()
        displayArray()
    }else{
        alert('Voce deveria ter adicionado um valo válido')
    }
}


function remove(){
    let lastValue = gasto[gasto.length - 1];

    if (lastValue.includes('Gasto')){
        saldoFinal += newGasto
        i--
        listra.pop()
        document.getElementById('viewSaldo').innerHTML = (`Saldo: ${saldoFinal.toFixed(2)} <br>`)
        displayArray()
    }else if(lastValue.includes('Ganho')){
        saldoFinal -= newGanho
        i--
        listra.pop()
        document.getElementById('viewSaldo').innerHTML = (`Saldo: ${saldoFinal.toFixed(2)} <br>`)
        displayArray() 
    }
}

