class Empresa{
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
        return `Nome: ${this.nome}`
    }
}
class Mercadoria extends Empresa{
    private mercadoria : string;

    constructor(nome:string, mercadoria:string){
        super(nome);
        this.mercadoria = mercadoria
    }
    setMercadoria(mercadoria:string){
        this.mercadoria = mercadoria
    }
    getMercadoria():string{
        return this.mercadoria
    }
    toString(): string {
        return `Nome: ${super.toString()} Mercadoria: ${this.mercadoria}`
    }
}

function Testa(obj:Mercadoria){
    console.log(obj.toString())
}

let objm1 = new Mercadoria('FoodCompany' , 'Alimentos')
let objm2 = new Mercadoria('FoodCompany' , 'Bebidas')
Testa(objm1)
Testa(objm2)