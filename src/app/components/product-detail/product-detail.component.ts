import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from 'src/app/models/Products';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/productService';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})

export class ProductDetailComponent implements OnInit {
  
  productData: Products;

  constructor(
    private _productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private _cartService: CartService
  ) { }

  ngOnInit(): void {
    let productID = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('ime je ', productID);

    productID && this._productService.getProductById(+productID).subscribe((res: any) => {
      this.productData = res;
      console.log(res);
    });
  }

  /*addProductToCart() {
      this._cartService.addToCart(this.productData).subscribe({
        next: (data) => {
          console.log(data);
        },
        error: (err) => {
          console.log(err);
        }
      });
    }*/
}
