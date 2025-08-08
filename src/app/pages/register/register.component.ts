import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ItemCreate, Item } from '../../model/item.model';

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

onClose() {
throw new Error('Method not implemented.');
}

}
