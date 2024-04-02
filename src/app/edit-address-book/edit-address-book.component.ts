import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-edit-address-book',
  templateUrl: './edit-address-book.component.html',
  styleUrl: './edit-address-book.component.css',
})
export class EditAddressBookComponent {
  @Input() addressId: any;

  constructor(private http: HttpClient, private router: Router) {}

  addressData = new FormGroup({
    fullName: new FormControl(),
    phoneNumber: new FormControl(),
    address: new FormControl(),
    city: new FormControl(),
    state: new FormControl(),
    zipCode: new FormControl(),
  });

  test() {
    console.log(this.addressId);
    console.log(this.addressData.value);
  }

  editAddress() {
    const url = 'http://localhost:8080/addressBook/edit/' + this.addressId;

    this.http
      .put(url, this.addressData.value, { responseType: 'text' })
      .subscribe((response) => {
        console.log(response);
        console.log(this.addressData.value);
        if (response == 'Address updated successfully') {
          window.location.reload();
        }
      });
  }
}
