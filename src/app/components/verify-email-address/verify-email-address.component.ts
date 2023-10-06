import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-verify-email-address',
  templateUrl: './verify-email-address.component.html',
  styleUrls: ['./verify-email-address.component.css']
})
export class VerifyEmailAddressComponent implements OnInit {

  userVerification: any;

  constructor(
    private authService: AuthService,
  ){}

  ngOnInit(): void {
    this.userVerification = this.authService.userVerification;
  }

  resendVerificationEmail(){
    this.authService.sendVerificationMail(this.userVerification);
  }
}
