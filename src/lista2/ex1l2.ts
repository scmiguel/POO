class ClienteEnc {
    private nroConta : string
    private nroAgencia : string
    private nome : string
    private saldo : number

    constructor(nroConta : string, nroAgencia : string, nome : string, saldo : number){
        this.setConta(nroConta)
        this.setAgencia(nroAgencia)
        this.setNome(nome)
        this.setSaldo(saldo)
    }

    setConta(nroConta:string){
        if((nroConta.length == 8) && (nroConta.charAt(6)== '-'))
            this.nroConta = nroConta
        else{
            this.nroConta = ""
            console.log('Numero de Conta Invalido')
        }
    }

    setNome(nome:string){
        nome.length <= 30 ? this.nome = nome : (this.nome = "", console.log('Nome muito grande'))
    }

    setAgencia(nroAgencia:string){
        if((nroAgencia.length == 6) && (nroAgencia.charAt(4)== '-'))
            this.nroAgencia = nroAgencia
        else{
            this.nroAgencia = ""
            console.log('Numero de Conta Invalido')
        }
    }

    setSaldo(saldo:number){
        (saldo >= 0) ? this.saldo = saldo : (console.log('Saldo insulficiente'))
    }

    getConta():string{
        return this.nroConta
    }

    getAgencia():string{
        return this.nroAgencia
    }

    getNome():string{
        return this.nome
    }

    getSaldo():number{
        return this.saldo
    }

    Deposito(x:number){
        this.setSaldo(this.saldo + x)
    }

    Sacar(x:number){
        this.setSaldo(this.saldo - x)
    }

    Mostrar(){
        console.log(`Conta: ${this.nroConta}, Agencia: ${this.nroAgencia}, Nome: ${this.nome}, Saldo: R$ ${this.saldo}`)
    }
}

let objClienteEnc = new ClienteEnc('000001-1', '0001-1', 'Miguel', 100)
objClienteEnc.Deposito(100)
objClienteEnc.Sacar(50)
objClienteEnc.Sacar(100)
objClienteEnc.Mostrar()
