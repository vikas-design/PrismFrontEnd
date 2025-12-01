import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Api } from '../services/api';


@Component({
  selector: 'app-login',
  imports: [ RouterModule, FormsModule, CommonModule ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
 
  login = {
    User_Name: '',
    password: ''
  };
  constructor(private api: Api) {}

  onSubmit() {
    this.api.login(this.login).subscribe({
      next: (res) => {
        console.log("Login Success", res);
      },
      error: (err) => {
        console.log("Error:", err);
      }
    });
  }
}

