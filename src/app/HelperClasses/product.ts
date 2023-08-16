export class product
{
    constructor(productId: number, name : string, price : number){
        this.productId = productId;
        this.name = name;
        this.price = price;
    }

    productId: number | undefined;
    name : string | undefined;
    price : number | undefined
}