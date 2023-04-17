class Rio{
    public nome : string
    public nivel : number
    public poluido : boolean

    constructor(nome : string, nivel : number, poluido : boolean){
        this.nome = nome
        this.nivel = nivel
        this.poluido = poluido
    }

    Chover(x:number):void {
        this.nivel += x
    }
    Ensolarar(x:number):void {
        this.nivel -= x
    }
    Sujar():void {
        this.poluido = true
    }
    Limpar():void {
        this.poluido = false
    }
    Mostrar():string {
        return `Nome do Rio: ${this.nome}\nNiveldo Rio: ${this.nivel}\nPoluição: ${this.poluido}`
    }
}

let objRio = new Rio('Amazonas', 100, false)
objRio.Chover(10)
objRio.Sujar()
console.log(objRio.Mostrar())