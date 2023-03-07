class ProdutoEnc{
    public id : number
    public descricao : string
    private qtde : number
    private preco : number

    constructor(id : number, descricão : string, qtde : number, preco : number){
        this.id = id
        this.descricao = descricão
        this.setQtde(qtde)
        this.setPreco(preco)
    }

    Comprar(x:number):void{
        this.qtde += x
    }
    Vender(x:number):void{
        this.setQtde(this.qtde - x)
    }
    Subir(x:number):void{
        this.preco += x
    }
    Descer(x:number):void{
        this.setPreco(this.preco - x)
    }
    Mostrar():string{
        return `ID Produto: ${this.id}\nDescrição: ${this.descricao}\nQuantidade: ${this.qtde}\nValor: ${this.preco}`
    }
    setQtde(qtde: number){
        if (qtde >= 0)
            this.qtde = qtde
        else
            console.log('Valor de qtde negativo')
    }
    setPreco(preco: number){
        if(preco > 0)
            this.preco = preco
        else
            console.log('Valor de preco negativo')
    }
    getQtde(): number{
        return this.qtde
    }
    getPreco(): number{
        return this.preco
    }
}

let objProdutoEnc = new ProdutoEnc(1, 'Sapato', 10, 100)
objProdutoEnc.Descer(20)
objProdutoEnc.Vender(2)
objProdutoEnc.setPreco(0)
objProdutoEnc.setQtde(1)
console.log(objProdutoEnc.Mostrar())
console.log(`Qtde: ${objProdutoEnc.getQtde()}\nPreço: ${objProdutoEnc.getPreco()}`)