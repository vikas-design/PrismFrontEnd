import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Api } from '../../services/auth.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  imports: [ RouterModule, FormsModule, CommonModule, MatSnackBarModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
 
  login = {
    username: '',
    password: '',
    guid: crypto.randomUUID()
  };
  constructor(private api: Api, private snackBar: MatSnackBar) {}

  onSubmit() {
    this.api.login(this.login).subscribe({
      next: (res) => {
        debugger
        if(res.Success){
          localStorage.setItem("user", JSON.stringify(res));
          this.snackBar.open(res.Message, "Close", {
          duration: 3000
          });
        }
        else{
          this.snackBar.open(res.Message, "Close", {
          duration: 3000
          });
        }
      },
      error: (err) => {
        console.log("Error:", err);
      }
    });
  }
}

