import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/authService';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  @ViewChild('logInForm') singupForm: NgForm;

  constructor(
    private authService: AuthService
  ) {
  }
  isLogedIn = false;
  ngOnInit(): void {

  }

  onSubmit() {
    console.log(this.singupForm);
  }

  signIn(email: string, password: string) {
    this.authService.signIn(email, password);
  }

  signOut(){
    this.authService.signOut();
  }
}


