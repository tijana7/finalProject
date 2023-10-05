import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  @ViewChild('logInForm') singupForm: NgForm;
  

  constructor(){
}

  ngOnInit(): void {
    
  }

  onSubmit(){
    console.log(this.singupForm);
  }
}

