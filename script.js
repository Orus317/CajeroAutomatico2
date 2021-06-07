class Billete{
    constructor(valor, cantidad, rutaImagen){
        this.valor = valor
        this.cantidad = cantidad
        this.imagen = new Image
        this.imagen.src = rutaImagen
    }
    mostrarImagen(){
        console.log(this.imagen)
    }
}

let caja = []
let entregado = []
caja.push(new Billete(50,25, "./assets/billete50.png"))
caja.push(new Billete(20,10,"./assets/billete20.png"))
caja.push(new Billete(10,10, "./assets/billete10.png"))
dineroTotal = calcularDineroTotal()

function entregarDinero(){
    entregado = []
    var t = document.getElementById("dinero")
    dinero = t.valueAsNumber
    for(billete of caja){
        // console.log(billete)
        if(dinero > 0){
            div = Math.floor(dinero/billete.valor) 
            // console.log(div)
            if( div > billete.cantidad ){
                papeles = billete.cantidad
            } else {
                papeles = div
            }
            entregado.push(new Billete(billete.valor, papeles, billete.imagen.src))
            dinero -= (billete.valor*papeles)
            dineroTotal -= (billete.valor*papeles)
        }
        
    }
    if(dinero > 0){
        resultado.innerHTML = "No hay suficiente dinero <br>"
    } else {
        for(e of entregado){
            if(e.cantidad!=0){
                resultado.innerHTML += e.cantidad + " billetes de $" +e.valor + "<br><br>" 
                for(i =0; i<e.cantidad; i++){
                    resultado.appendChild(e.imagen)
                    resultado.innerHTML += " "
                }
                resultado.innerHTML += "<br><hr>"
            }
        }
        resultado.innerHTML += "<hr>Quedan $" + dineroTotal + " en el cajero <br><hr>"
    }
}

let dinero = 0; //por ahora, esto después se obtendrá por el usuario
let div = 0
let papeles = 0

function calcularDineroTotal(){
    let acumulador = []
    for(c of caja){
        let a = c.valor * c.cantidad
        acumulador.push(a)
    }
    return acumulador.reduce((x,y)=>x+y)
}

let retirar = document.getElementById("Retirar")
retirar.addEventListener("click", entregarDinero)
let resultado = document.getElementById("resultado")

