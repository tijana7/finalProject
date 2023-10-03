import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/models/Category';
import { Products } from 'src/app/models/Products';
import { ProductService } from 'src/app/services/productService';
import { ProductDetailComponent } from '../product-detail/product-detail.component';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  allProducts: Products[] = [];
  allCategories: Category[] = [];
  

  constructor(
    private _productService: ProductService,
    private activatedRoute: ActivatedRoute) { }
    productData: Products;

    ngOnInit(): void {
      this._productService.getAllProducts().subscribe({
        next: (data) => {
          this.allProducts = data as Products[];
        },
        error: (err) => {
          console.log(err);
        }
      });
      this._productService.getAllCategories().subscribe({
        next: (data) => {
          this.allCategories = data as Category[];
        },
        error: (err) => {
          console.log(err);
        }
      })
    }
  
    selectCategory(name: string) {
      this._productService.getProductsByCategory(name).subscribe({
        next: (data) => {
          this.allProducts = data as Products[];
        },
        error: (err) => {
          console.log(err);
        }
      })
    }
  }

