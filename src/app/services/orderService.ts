import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './authService';
import { Order } from '../models/Order';
import { Products } from '../models/Products';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService,
  ) { }

  getOrders(){
    const token = this.authService.getToken();
    return this.httpClient.get("https://finalproject-f9154.firebaseio.com/products.json?auth="+token);
  }

  storeOrders(product: Products[]){
    const token = this.authService.getToken();
    return this.httpClient.put("https://finalproject-f9154.firebaseio.com/products.json?auth="+token, product);
  }

}
