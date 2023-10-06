import { Component, OnInit } from '@angular/core';
import { faUserCircle, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CartService } from 'src/app/services/cartService';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faUser = faUserCircle;
  faCart=faShoppingCart;
  
  cartNumber: number = 0;

  constructor(
    private _cartService: CartService
  ){}

  ngOnInit(): void {
    this._cartService.shopCartNumberSubject.subscribe({
      next: (res) => {
        this.cartNumber = res;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

}