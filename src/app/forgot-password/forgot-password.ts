import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forgot-password',
  imports: [ RouterLink, FormsModule, CommonModule ],
  templateUrl: './forgot-password.html',
  styleUrl: './forgot-password.scss',
})
export class ForgotPassword {
  email = "";
  submitted = false;

  onSubmit() {
    console.log("Reset Email Sent:", this.email);
    this.submitted = true;
  }
}
