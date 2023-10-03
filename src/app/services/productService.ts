import { Injectable } from '@angular/core';
import { Products } from 'src/app/models/Products';
import { Category } from '../models/Category';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from '../const/url';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(private _httpClient: HttpClient) { }

  getAllCategories() {
    return this._httpClient.get(baseUrl + "categories");
  }

  getAllProducts() {
    return this._httpClient.get(baseUrl + "products")
  }

  getProductsByCategory(category: string) {
    return this._httpClient.get(baseUrl + "products").pipe(
      map(
        (products: any) => {
          let filteredProducts: Products[] = [];
          products.forEach((element: Products) => {
            if (element.category == category) {
              filteredProducts.push(element);
            }
          }
          );
          return filteredProducts;
        }
        )
        )
      }

  getProductById(productID: number) {
    return this._httpClient.get(baseUrl + "products/" + productID);
  }

  getProductByName(productName: string) {
    return this._httpClient.get(baseUrl + "products/" + productName);
  }
}
