export class Animal{
    protected nome: string

    constructor(nome: string){
        this.nome = nome
    }
    //fazer set / get
    toString(): string{
        return `Nome: ${this.nome}`
    }
    move(){
        console.log('animal se movendo')
    }
}