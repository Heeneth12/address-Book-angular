import { Component } from '@angular/core';

@Component({
  selector: 'app-address-book',
  templateUrl: './address-book.component.html',
  styleUrl: './address-book.component.css',
})
export class AddressBookComponent {
  data: any = [
    {
      fullName: 'HEENETH SAI',
      address: '7/74/A SN puram Marver Road',
      city: 'Mumbai',
      state: 'Maharashtra',
      zipCode: '517501',
      phoneNumber: 9885701141,
    },
    {
      fullName: 'John Doe',
      address: '123 Main St',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      phoneNumber: 1234567890,
    },
    {
      fullName: 'Jane Smith',
      address: '456 Elm St',
      city: 'Los Angeles',
      state: 'CA',
      zipCode: '90001',
      phoneNumber: 9876543210,
    },
  ];
}
