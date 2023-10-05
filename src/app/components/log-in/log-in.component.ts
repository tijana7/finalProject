import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  @ViewChild('logInForm') singupForm: NgForm;
  

  constructor(){
}

  ngOnInit(): void {
    
  }

  onSubmit(){
    console.log(this.singupForm);
  }
}


