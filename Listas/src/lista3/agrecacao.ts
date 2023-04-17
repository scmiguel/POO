class Product {//classe parte
    private name : string
    private price : number

    constructor(name:string, price:number){
        this.name=name,this.price=price
    }

    setName(name:string){
        this.name=name
    }

    setPrice(price:number){
        price >= 0 ? this.price=price : (this.price=0, console.log('Preço Invalido')) 
    }

    getName(){
        return this.name
    }

    getPrice(){
        return this.price
    }
    toString():string{
        return `Name: ${this.name} Preço: ${this.price}`
    }
}

class CarItem {//classe todo
    private product : Product
    private quantity : number

    constructor(product:Product, quantity : number){
        this.product = product, this.quantity=quantity
    }

    setQtde(quantity:number){
        quantity >= 1 ? this.quantity=quantity : (this.quantity=1, console.log('Quantidade Invalida'))
    }

    getQtde(){
        return this.quantity
    }

    calcTotalPrice():number{
        return this.quantity * this.product.getPrice()
    }

    toString():string{
        return `Produto: ${this.product.toString()} Quantidade: ${this.quantity}`
    }
}

class ShopingCart{ //classe todo
    private id : number
    private carItens : CarItem[]

    constructor(id:number){
        this.id=id; this.carItens=[]
    }

    addCarItem(x:CarItem){
        this.carItens.push(x)
    }

    toString():string{
        let saidavet =""
        for(let i=0;i<this.carItens.length;i++){
            saidavet = saidavet+"\n"+this.carItens[i].toString()
        }
        return `ID: ${this.id} Itens do carrinho: ${saidavet}`
    }
}

let obj1p = new Product("Sapato", 200)
let obj2p = new Product("cinto", 80)
let obj1CarItem = new CarItem(obj1p, 5)
let obj2CarItem = new CarItem(obj2p, 3)
let obj1SC = new ShopingCart(1)
obj1SC.addCarItem(obj1CarItem)
obj1SC.addCarItem(obj2CarItem)
console.log(obj1SC.toString())