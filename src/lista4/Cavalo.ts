import { Animal } from './Animal';

export class Cavalo extends Animal{
    private competidor: boolean

    constructor(nome: string, competidor: boolean){
        super(nome)
        this.competidor = competidor
    }

    setCompetidor(competidor:boolean){
        this.competidor = competidor
    }

    getCompetidor():string{
        return `${this.competidor ? 'É Competidor' : 'Não é Competidor'}`
    }

    toString(): string {
        return `${super.toString()} Competidor: ${this.competidor ? 'É Competidor' : 'Não é Competidor'}`
    }

    move(): string{
        return `Cavalo trotando`
    }
}