import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CartItem } from '../models/cartItem';
import { Products } from '../models/Products';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from '../const/url';
import { Order } from '../models/Order';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  shopCartNumberSubject = new Subject<number>();
  shopCartNumber = 0;

  cart: CartItem[] = [];

  constructor(
    private _httpClient: HttpClient,
  ) { }

  addToCart(product: Products){
    this.shopCartNumber++;
    this.shopCartNumberSubject.next(this.shopCartNumber);
    let index = this.cart.findIndex(x => x.productId == product.id);
    if(index != -1){
      this.cart[index].quantity++;
      this.cart[index].totalPrice += this.cart[index].productPrice;
    }
    else{
      this.cart.push(new CartItem(product.id, 1, product.name, product.price, product.imgSrc));
    }
    return this._httpClient.put(baseUrl+"cart/1", {data: this.cart});
  }

  getCartData(){
    return this._httpClient.get(baseUrl+"cart/1");
  }

  submitOrder(order: Order){
    return this._httpClient.post(baseUrl + "orders", order);
  }

  resetCart(){
    this.cart = [];
    this.shopCartNumber = 0;
    this.shopCartNumberSubject.next(this.shopCartNumber);
    return this._httpClient.put(baseUrl+"cart/1", {data: []});
  }
}
