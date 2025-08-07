import { Component } from '@angular/core';
import { UserCreate, User } from '../../model/user.model';
import { UserService } from './service/user-crud.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-registration',
  imports: [
    FormsModule
  ],
  templateUrl: './user-registration.component.html',
  styleUrl: './user-registration.component.scss'
})

export class UserRegistration {
  user: UserCreate = {
    name: '',
    email: '',
    sector: '',
    registration: '',
    rfid_code: '',
  };

  constructor(private userService: UserService){}

  onSubmit(){
    this.userService.add(this.user).subscribe({
      next: (res) => {
        alert('Usuário cadastro com sucesso!');
        this.user = {name: '', email: '', sector: '', registration: '', rfid_code: ''};
      },
      error: (err) => {
        console.error(err);
        alert('Erro ao Cadastrar usuário.')
      },
    });
  }
}
