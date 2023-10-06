import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Order } from 'src/app/models/Order';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css']
})
export class PaymentDetailsComponent implements OnInit {
  
  paymentDetailForm: FormGroup;
  
  constructor(
    private _formBuilder: FormBuilder,
    private _cartService: CartService,
    private _router: Router,
  ){}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(){
    this.paymentDetailForm = this._formBuilder.group({
      "firstName": new FormControl("", {validators: [Validators.required, Validators.minLength(5)]}),
      "lastName": new FormControl("", {validators: [Validators.required, Validators.minLength(5)]}),
      "email": new FormControl("", {validators: [Validators.required, Validators.email]}),
      "phoneNumber": new FormControl("", {validators: [Validators.required, Validators.minLength(5)]}),
      "address": new FormControl("", {validators: [Validators.required, Validators.minLength(5)]}),
      "comment": new FormControl(""),
      "payMethod": new FormControl("", {validators: [Validators.required, Validators.minLength(5)]}),
    })
  }

  send(){
    let totalPrice = 0;
    this._cartService.cart.forEach(prod => {
      totalPrice += prod.totalPrice;
    });
    let payDetails = this.paymentDetailForm.value;
    let currentDate = new Date();
    let order: Order = {
      id: 0,
      date: currentDate.getDate() + " " + currentDate.getTime(),
      totalPrice: totalPrice,
      nameSurname: payDetails.name + " " + payDetails.surname,
      email: payDetails.email
    };

    this._cartService.submitOrder(order).subscribe({
      next: (data) => {
        this._cartService.resetCart().subscribe({
          next: (res)=>{
            console.log(res);
            this._router.navigate(["/"]);
          },
          error: (err) => {
            console.log(err);
          }
        })
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
