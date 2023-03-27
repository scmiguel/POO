import { Animal } from "./Animal";

export class Cobra extends Animal{
    private poison: boolean;

    constructor(nome:string, poison: boolean){
        super(nome)
        this.poison = poison
    }

    toString(): string {
        return `${super.toString()} Poison: ${this.poison}`
    }
    
    move(): string{
        return `Cobra Rastejando`
    }
}