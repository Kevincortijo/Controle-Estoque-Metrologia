import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class Login {
  username: string = '';
  password: string = '';
  
  constructor(private router: Router) {}

  onLogin(){
    console.log('Login with: ', this.username, this.password);
    this.router.navigate(['/home'])
  }
}
