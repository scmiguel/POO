class Product {
    private name : string
    private price : number

    constructor(name:string, price:number){
        this.name=name,this.price=price
    }

    getPrice(){
        return this.price
    }
}

class CarItem {
    private product : Product
    private quantity : number

    constructor(product:Product, quantity : number){
        this.product = product, this.quantity=quantity
    }

    calcTotalPrice():number{
        return this.quantity * this.product.getPrice()
    }
}