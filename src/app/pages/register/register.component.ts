import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ItemCreate, Item } from '../../model/item.model';
import { ItemService } from './service/item-crud.service';

@Component({
  selector: 'app-register',
  imports: [
    FormsModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class Register {
  item: ItemCreate = {
    name: '',
    code: '',
    quantity: 0,
    supplier: '',
    manufacturer: '',
    unit_price: 0,
    descripition: '',  
  }

  constructor(private itemService:ItemService){}

  onSubmit(){
    this.itemService.add(this.item).subscribe({
      next: (res) => {
        alert('Item cadastrado com sucesso');
        this.item = {name: '', code: '', quantity: 0, supplier: '', manufacturer: '', unit_price: 0, descripition: ''};
      },
      error: (err) => {
        console.error(err);
        alert('Erro ao cadastrar o Item');
      }
    })
  }

  onClose() {
  throw new Error('Method not implemented.');
  }

}
