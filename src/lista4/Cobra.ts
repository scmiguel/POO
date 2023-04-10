import { Animal } from "./Animal";

export class Cobra extends Animal{
    private poison: boolean;

    constructor(nome:string, poison:boolean){
        super(nome)
        this.poison = poison
    }

    setPoison(){
        this.poison 
    }

    getPoison(){
        return this.poison
    }

    toString(): string {
        return `${super.toString()} Poison: ${this.poison ? 'Venenosa' : 'Não venenosa'}`
    }
    
    move(): string{
        return `Cobra Rastejando`
    }
}