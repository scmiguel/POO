class Produto{
    public id : number
    public descricao : string
    public qtde : number
    public preco : number

    constructor(id : number, descricão : string, qtde : number, preco : number){
        this.id = id
        this.descricao = descricão
        this.qtde = qtde
        this.preco = preco
    }

    Comprar(x:number):void{
        this.qtde += x
    }
    Vender(x:number):void{
        this.qtde -= x
    }
    Subir(x:number):void{
        this.preco += x
    }
    Descer(x:number):void{
        this.preco -= x
    }
    Mostrar():string{
        return `ID Produto: ${this.id}\nDescrição: ${this.descricao}\nQuantidade: ${this.qtde}\nValor: ${this.preco}`
    }
}

let objProduto = new Produto(1, 'Sapato', 10, 100)
objProduto.Descer(20)
objProduto.Vender(2)
console.log(objProduto.Mostrar())