class Veiculo{
    protected nome: string;

    constructor(nome:string){
        this.nome = nome
    }
    setNome(nome:string){
        this.nome = nome
    }
    getNome():string{
        return this.nome
    }
    toString(): string{
        return `Veiculo: ${this.nome}`
    }
    mostra(){
        return 'Veiculo esta se movendo'
    }
}
class Moto extends Veiculo{
    private combustivel : string;

    constructor(nome:string, combustivel:string){
        super(nome)
        this.combustivel = combustivel
    }
    setCombustivel(combustivel:string){
        this.combustivel = combustivel
    }
    getCombustivel(){
        if(this.combustivel == 'g')
            return 'Gasolina'
        else
            return 'Etanol'
    }
    toString(): string {
        return `${super.toString()} Combustivel: ${this.getCombustivel()}`
    }
    mostra(): string {
        return `Moto sendo pilotada`
    }
}
class Car extends Veiculo{
    private combustivel : string;

    constructor(nome:string, combustivel:string){
        super(nome)
        this.combustivel = combustivel
    }
    setCombustivel(combustivel:string){
        this.combustivel = combustivel
    }
    getCombustivel(){
        if(this.combustivel == 'g'){
            return `Gasolina`
        }
        else{
            return `Etanol`
        }
    }
    toString(): string {
        return `${super.toString()} Combustivel: ${this.getCombustivel()}`
    }
    mostra(): string {
        return `Carro sendo dirigido`
    }
}

function Test(obj:Veiculo){
    console.log(obj.toString())
    console.log(obj.mostra())
}

let objv1 = new Moto('CG 150', 'g')
let objv2 = new Car('Chevette', 'e')

Test(objv1)
Test(objv2)