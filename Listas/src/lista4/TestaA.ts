import { Animal } from "./Animal";
import { Cobra } from "./Cobra";
import { Cavalo } from "./Cavalo";

function Polimorfo(animal: Animal){
    console.log(animal.toString())
    console.log(animal.move())
}

let objCobra = new Cobra('Joana', false)
let objCavalo = new Cavalo('Jorge', true)

/*console.log(objCavalo.toString())
console.log(objCavalo.move())

console.log(objCobra.toString())
console.log(objCobra.move())*/

Polimorfo(objCavalo)
Polimorfo(objCobra)