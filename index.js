
  //Guarda el total de cada Frame en un array
  let totalesFrames = []
  //Variable tipo número nos va sumando el puntaje
let puntajeSuma = 0;
  //Guarda la suma de los tiros de cada Frame
let puntajeFrames = []
  //Guarda el valor de cada tiro 1
let tiro1 = []
  //Guarda el valor de cada tiro 2
let tiro2 = []

//Genera los valores de cada tiro y los guarda en las posiciones de los array
function tiros(){
  for (let i = 0; i < 11; i++) {
    tiro1[i] = Math.round(Math.random() * 10)
    let numero = 10 - tiro1[i]
    tiro2[i]= Math.round(Math.random() * numero)
    
    //Aqui sacamos el total de cada frame
    totalesFrames[i] = tiro1[i]+tiro2[i]
    
    //Imprime los valores de los tiros en el tablero (Web)
    const tiro1_html = document.getElementById('tiro1_i' + i.toString())
    tiro1_html.innerHTML = tiro1[i]
    const tiro2_html = document.getElementById('tiro2_i' + i.toString())
    tiro2_html.innerHTML = tiro2[i]
  }
}

 //Esta funcion saca el valor total del puntaje (sumatoria de cada frame)
function sumaTotales(){

  //Strike
  for(let i=0; i < 10; i++){
    if (tiro1[i]===10){
      puntajeSuma = puntajeSuma + totalesFrames[i] + totalesFrames[i+1]
      puntajeFrames[i] = puntajeSuma
      console.log("puntajeTotal(Strike):",[i+1], puntajeFrames[i])
   }//Spare
   else if (totalesFrames[i]===10){
     puntajeSuma = puntajeSuma + totalesFrames[i] + tiro1[i+1]
     puntajeFrames[i] = puntajeSuma
     console.log("puntajeTotal(Spare)...:",[i+1], puntajeFrames[i])
   }//Tiro normal
   else {
     puntajeSuma = puntajeSuma + totalesFrames[i];
     puntajeFrames[i] = puntajeSuma
     console.log('puntajeTotal:',[i+1],puntajeFrames[i])
   }   

     //Imprime los valores de los totales en el tablero
    const totales_html = document.getElementById('totales_i' + i.toString())
  totales_html.innerHTML = puntajeFrames[i]
  }
}

//Llamamos a las funciones tiros y sumaTotales
tiros();
sumaTotales();

/********************************** Onclick HTML */
function jugar(){
    console.log("Jugar")
    location.reload()
}

