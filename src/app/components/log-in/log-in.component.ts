import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/userService';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  isValidFormSubmitted = false;
  user = new User();
  constructor(private _userService: UserService){
  }

  ngOnInit(): void {
    
  }

  onFormSubmit(form: NgForm){
    this.isValidFormSubmitted = false;
    if(form.valid){
      return;
    }

    this.isValidFormSubmitted = true;
    this.user=form.value;
    this,this._userService.createUser(this.user);
    this.user = new User();
    form.resetForm;
  }

 

}


