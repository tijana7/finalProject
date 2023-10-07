import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/authService';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  @ViewChild('logInForm') singupForm: NgForm;
  currentUser: any;

  constructor(
    private authService: AuthService
  ){
}

  ngOnInit(): void {
    
  }

  onSubmit(){
    console.log(this.singupForm);
  }

  signUp(email: string, password: string){
    this.authService.signUp(email, password);
  }

  sendVerificationMail(currentUser:any){
    this.authService.sendVerificationMail(currentUser);
  }
}

