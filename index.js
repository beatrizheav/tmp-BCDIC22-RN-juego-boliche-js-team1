let tablero = []

function crearTablero () {
  for (let n = 0; n < 3; n++) {
    tablero[n] = []
    for (let m = 0; m <= 9; m++) {
      tablero[n][m] = ' '
    }
  }
  console.table(tablero)
}

crearTablero()

let tiro1 = 0,
  tiro2 = 0,
  total = 0
let tiro3 = 0

let totales = []
let totalesParciales = []
let totalParcial = 0

let control = 0

function aleatorio () {
  for (let i = 0; i < 10; i++) {
    tiro1 = Math.round(Math.random() * 10)
    let numero = 10 - tiro1
    tiro2 = Math.round(Math.random() * numero)

    totales[i] = tiro1 + tiro2

    console.log('tiros', tiro1, tiro2)
    console.log('total', totales[i])

    //Strike:
    tiro1 === 10 ? strike() : tiro1 + tiro2 === 10 ? spare() : ''

    totalParcial = totalParcial + totales[i]
    totalesParciales.push(totalParcial)
    console.log('totalParcial', totalParcial)

    imprimirTotales(i)
  }
  console.table(tablero)
}

function imprimirTotales (i) {
  const tiro1_html = document.getElementById('tiro1_i' + i.toString())
  tiro1_html.innerHTML = tiro1

  const tiro2_html = document.getElementById('tiro2_i' + i.toString())
  tiro2_html.innerHTML = tiro2

  const totales_html = document.getElementById('totales_i' + i.toString())
  totales_html.innerHTML = totalesParciales[i]

  tablero[control][i] = tiro1
  tablero[control + 1][i] = tiro2
  tablero[control + 2][i] = totalesParciales[i]
}

aleatorio()

function strike () {
  tiro1 = Math.round(Math.random() * 10)
  let numero = 10 - tiro1
  tiro2 = Math.round(Math.random() * numero)
  console.log('tiros2', tiro1, tiro2)
  console.log('total2', total)
}

function spare () {
  tiro1 = Math.round(Math.random() * 10)
}

function puntajeBasico () {
  total = tiro1 + tiro2
}

//-----------------------------//
//HTML script:


/********************************** */
function jugar(){
    console.log("Jugar")
    location.reload()
}