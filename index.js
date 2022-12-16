
let tablero=[]

    function crearTablero(){
        for(let n=0; n<3;n++){
            tablero[n]=[]
            for(let m=0; m<=10;m++){
                tablero[n][m]=' ' 
            }
        }
        
    }

    crearTablero()

let tiro1=0, tiro2=0, total=0
let tiro3=0

let totales=[]
let totalParcial=0



function aleatorio(){  
    
    for(let i=0; i<10;i++){
        tiro1=Math.round(Math.random()*10)
        let numero=(10-tiro1)
        tiro2=Math.round(Math.random()*numero)
        
        totales[i]=tiro1+tiro2

        console.log("tiros",tiro1,tiro2)
        console.log("total", totales[i]) 

        //Strike:
        tiro1===10? strike() : tiro1+tiro2===10? spare():''

        totalParcial=totalParcial+totales[i]
        console.log("totalParcial", totalParcial)

       /* for(let t=0; t<tablero[].lenght;t++){
            for(let c=0;c<)
        }


        for(let )
            for(let n=0; n<3;n++){
                tablero[n]=[]
                for(let m=0; m<=10;m++){
                    tablero[n][m]=totales[i] 
                }
            }*/
           
        
    }

    console.table(tablero)
   
}



aleatorio()

function strike(){
    tiro1=Math.round(Math.random()*10)
    let numero=(10-tiro1)
    tiro2=Math.round(Math.random()*numero)
    console.log("tiros2",tiro1,tiro2)
    console.log("total2", total) 

    
}



function spare(){
    tiro1=Math.round(Math.random()*10)
    
}




function puntajeBasico(){
    total=tiro1+tiro2
}

   