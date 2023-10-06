import { Component, OnInit } from '@angular/core';
import { CartService } from './services/cartService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'projekatFinal';

  constructor(
    private _cartService: CartService
  ){}
  
  ngOnInit(): void {
    this.getCartData();
  }

  getCartData(){
    this._cartService.getCartData().subscribe({
      next: (data: any) => {
        console.log(data.data);
        if(data.data){
          this._cartService.cart = data.data;
          let productCount = 0;
          data.data.forEach((element:any) => {
            productCount += element.quantity;
          });
          this._cartService.shopCartNumber = productCount;
          this._cartService.shopCartNumberSubject.next(this._cartService.shopCartNumber);
        }
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

}
