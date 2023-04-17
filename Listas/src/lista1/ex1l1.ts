class Aluno {
    public nroAluno : number
    public nome :  string
    public idade : number
    public p1 : number
    public p2 : number

    constructor (nroAluno : number, nome :  string, idade : number, p1 : number, p2 : number){
        this.nroAluno = nroAluno
        this.nome = nome
        this.idade = idade
        this.p1 = p1
        this.p2 = p2
    }

    NotaFinal():number {
        return (this.p1+this.p2)/2
    }
    passou():void{
        (this.NotaFinal()>=6)? console.log('Passou'):console.log('Não Passou')
    }
    dadosAluno(): string{
        return (`Numero do Aluno: ${this.nroAluno}\nNome: ${this.nome}\nIdade: ${this.idade}\nNota Final: ${this.NotaFinal()}`)
    }
}

let objAluno = new Aluno(1, "Miguel", 21, 7.5, 5)
console.log(objAluno.dadosAluno())
objAluno.passou()