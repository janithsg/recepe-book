import { Component, OnInit, Injectable } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})


export class SigninComponent implements OnInit {

  constructor(private authService :AuthService) { }

  ngOnInit() {
  }

  onLogIn(form:NgForm){
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signinUser(email,password);
  }

}
