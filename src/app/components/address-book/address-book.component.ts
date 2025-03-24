import { Component } from '@angular/core';
import { Person } from 'src/app/models/personmodel';

@Component({
  selector: 'app-address-book',
  templateUrl: './address-book.component.html',
  styleUrls: ['./address-book.component.scss']
})
export class AddressBookComponent {
  displayedColumns: string[] = ['name', 'email', 'phoneNumber', 'actions'];
  dataSource: Person[] = [
    { name: 'Varaza Mishra', email: 'varaza@example.com', phone: '02228017752' },
    { name: 'Trishna Bhalla', email: 'trishna@example.com', phone: '02223420607' },
    { name: 'Anish Kaskar', email: 'anish@example.com', phone: '02227893390' }
  ];

  deletePerson(index: number): void {
    this.dataSource.splice(index, 1);
  }
}
