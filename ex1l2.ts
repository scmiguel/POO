class Cliente {
    private nroConta : string
    private nroAgencia : string
    private nome : string
    private saldo : number

    constructor(nroConta : string, nroAgencia : string, nome : string, saldo : number){
        this.setConta(nroConta)
        this.nroAgencia = nroAgencia
        this.nome = nome
        this.setSaldo(saldo)
    }

    setConta(nroConta: string){
        if(nroConta.length()==8)
            this.nroConta = nroConta
        else
            console.log('Numero de Conta Invalido')
    }

    Deposito(x: number){
        this.saldo += x
    }
    Saque(x:number){
        this.setSaldo(this.saldo - x)
    }
    setSaldo(saldo: number){
        if(saldo > 0)
            this.saldo = saldo
        else
            console.log('Valor de saldo negativo')
    }
}

let objCliente = new Cliente('00001-1', '001-1', 'Miguel', 100)