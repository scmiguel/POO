class Carro {
    //declaração de variaveis
    modelo : string;
    velocidade : number;
    motor : boolean

    ligar(){
        this.motor = true
    }
    desligar(){
        this.motor = false
    }
    acelerar(x:number){
        this.velocidade = this.velocidade+x
    }
    frear(x:number){
        this.velocidade = this.velocidade-x
    }
}

let obj1 = new Carro()
obj1.modelo = "Onix"
obj1.velocidade = 0
obj1.motor = false
obj1.ligar()
obj1.acelerar(40)
obj1.frear(40)
obj1.desligar()


let obj2 = new Carro()
obj2.modelo = "Gol"
obj2.velocidade = 0
obj2.motor = false

console.log(obj1,'\n',obj2)

