import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CartItem } from 'src/app/models/CartItem';
import { CartService } from 'src/app/services/cartService';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: CartItem[] = [];
  cartForm: FormGroup;
  totalPrice = 0;

  constructor(
    private _cartService: CartService,
    private _fb: FormBuilder,
    private _router: Router,
  ){}

  ngOnInit(): void {
    this.cartItems = this._cartService.cart;
    this.cartItems.forEach(item => {
      this.totalPrice += item.totalPrice;
    })
    // this.buildCartForm();
  }

  // buildCartForm(){
  //   this.cartForm = this._fb.group({
  //     cartItems: new FormArray([])
  //   });
  //   this.cartItems.forEach(item => {
  //     this.getCartItemsAsFormArray().push({
  //       productId: new FormControl(item.productId),
  //       productPrice: new FormControl(item.productPrice),
  //       quantity: new FormControl(item.quantity),
  //       totalPrice: new FormControl(item.totalPrice)
  //     });
  //   })
  // }

  recalculateQuantity(event: any, cartItem: CartItem){
    let val = +((event.target as HTMLInputElement).value);
    let index = this.cartItems.findIndex(x => x.productId == cartItem.productId);
    if(index != -1 && (val > 0 && val < 99)){
      if(this.cartItems[index].quantity > val){
        //smanjio se broj proizvoda
        this._cartService.shopCartNumber -= this.cartItems[index].quantity - val;
      }
      else{
        //povecao se broj proizvoda
        this._cartService.shopCartNumber += val - this.cartItems[index].quantity;
      }
      this._cartService.shopCartNumberSubject.next(this._cartService.shopCartNumber);

      this.totalPrice -= this.cartItems[index].totalPrice;
      this.cartItems[index].quantity = val;
      this.cartItems[index].totalPrice = val * cartItem.productPrice;
      this.totalPrice += this.cartItems[index].totalPrice;
    }
    else{
      alert("error");
    }
  }

  getCartItemsAsFormArray(){
    return this.cartForm.get('cartItems') as FormArray;
  }

  submitOrder(){
    if(this._cartService.cart.length){
      this._router.navigate(['/payment-details']);
    }
  }

}
