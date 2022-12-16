class Tablero{
    

    constructor(){
        this.tablero=[]
    }

    

    crearTablero(){
        for(let n=0; n<=20;n++){
            this.tablero[n]=[]
            for(let m=0; m<=3;m++){
                this.tablero[n][m]='.'
            }
        }
        console.table(tablero)
    }

}

//export default Tablero
module.exports=Tablero