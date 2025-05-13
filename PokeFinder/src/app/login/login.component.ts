import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { response } from 'express';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';


  constructor(private router: Router, private http: HttpClient) {

  }
  goToSignup(): void {
    this.router.navigate(['/signup']);
  }

  onLogin(): void {
    const loginData = {
      username: this.username,
      password: this.password
    };
    this.http.post('/login', loginData).subscribe(
      (response) => {
        console.log('Login successful: ', response);
        this.router.navigate(['/home']);
      }, (error) => {
        console.error('login failed: ', error);
        alert('invalid login attempt');
      }
    );
  }


}
