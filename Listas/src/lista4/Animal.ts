export class Animal{
    protected nome: string

    constructor(nome: string){
        this.nome = nome
    }

    setNome(nome:string){
        nome.length <= 30 ? this.nome = nome : (this.nome = " ", console.log('Nome muito grande'))
    }

    getNome():string{
        return this.nome
    }

    toString(): string{
        return `Nome: ${this.nome}`
    }
    move(){
        console.log('animal se movendo')
    }
}