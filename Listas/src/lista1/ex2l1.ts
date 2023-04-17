class Cliente {
    public nroConta : number
    public nroAgencia : number
    public nome : string
    public saldo : number

    constructor (nroConta : number, nroAgencia : number, nome : string, saldo : number){
        this.nroConta = nroConta
        this.nroAgencia = nroAgencia
        this.nome = nome
        this.saldo = saldo
    }

    Deposito(x:number):void{
        this.saldo += x
    }
    Sacar(x:number):void{
        this.saldo -= x
    }
    DadosCliente():string{
        return `Conta: ${this.nroConta}\nAgencia: ${this.nroAgencia}\nNome: ${this.nome}\nSaldo: ${this.saldo}`
    }
}

let objCliente = new Cliente(1, 1, 'Miguel', 0)
objCliente.Deposito(100)
console.log(objCliente.DadosCliente())