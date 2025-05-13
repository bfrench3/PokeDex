import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { response } from 'express';
import { FormsModule } from '@angular/forms';
import { log } from 'console';


@Component({
  selector: 'app-signup',
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
  standalone: true
})
export class SignupComponent {
  username: string = ''
  password: string = ''

  constructor(private router: Router, private http: HttpClient) { }

  onSignup() {
    const loginData = {
      username: this.username,
      password: this.password
    };
    this.http.post('/signup', loginData).subscribe(
      (response) => {
        console.log('login successful: ', response);
        this.router.navigate(['/home']);
      }, (error) => {
        console.log('login failed', error);
        alert('invalid username or password');
      }
    );

  }
}
