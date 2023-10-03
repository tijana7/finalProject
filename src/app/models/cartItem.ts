export class CartItem{
    public productId: number;
    public quantity: number;
    public productName: string;
    public productPrice: number;
    public productImgSrc: string;
    public totalPrice: number

    constructor(productId: number, quantity: number, name: string, price: number, imgSrc: string){
        this.productId = productId;
        this.quantity = quantity;
        this.productName = name;
        this.productPrice = price;
        this.productImgSrc = imgSrc;
        this.totalPrice = quantity * price;
    }
}