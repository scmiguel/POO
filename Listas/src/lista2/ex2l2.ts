class AlunoEnc{
    private nroAlunoEnc : number
    private nomee : string
    private idadee : number
    private p1e : number
    private p2e : number

    constructor (nroAlunoEnc : number, nomee :  string, idadee : number, p1e : number, p2e : number){
        this.setNroAlunoEnc(nroAlunoEnc) 
        this.setNomee(nomee) 
        this.setIdadee(idadee)
        this.setP1e(p1e)
        this.setP2e(p2e) 
    }

    setNroAlunoEnc(nroAlunoEnc:number){
        let aux = nroAlunoEnc.toString()
        aux.length == 6 ? this.nroAlunoEnc = nroAlunoEnc : (this.nroAlunoEnc = 0o0 , console.log('Numero Invalido'))
    }

    setNomee(nomee:string){
        nomee.length <= 30 ? this.nomee = nomee : (this.nomee = "", console.log('Nome muito grande'))  
    }

    setIdadee(idadee:number){
        idadee >= 0 ? this.idadee = idadee : (this.idadee = 0 , console.log('Idade Invalida'))
    }

    setP1e(p1e:number){
        p1e >= 0 ? this.p1e = p1e : (this.p1e = 0 , console.log('Nota 1 Invalida'))
    }

    setP2e(p2e:number){
        p2e >= 0 ? this.p2e = p2e : (this.p2e = 0 , console.log('Nota 2 Invalida'))
    }

    getNroAlunoEnc():number{
        return this.nroAlunoEnc
    }

    getNomee():string{
        return this.nomee
    }

    getIdadee():number{
        return this.idadee
    }

    getP1e():number{
        return this.p1e
    }

    getP2e():number{
        return this.p2e
    }

    NotaFinal(){
            console.log(`Nota Final: ${(this.p1e+this.p2e)/2}`)
    }

    DadosAluno(){
        console.log(`Nro do Aluno: ${this.nroAlunoEnc}\nNome do Aluno: ${this.nomee}\nIdade do Aluno: ${this.idadee}\nNota 1: ${this.p1e}\nNota 2: ${this.p2e}`)
    }

}

let objAlunoEnc = new AlunoEnc(123456, "Miguel", 21, 7.5, 5)
objAlunoEnc.DadosAluno()
objAlunoEnc.NotaFinal()
