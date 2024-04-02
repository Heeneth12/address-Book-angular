import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrl: './add-address.component.css',
})
export class AddAddressComponent {
  constructor(private http: HttpClient, private router: Router) {}

  addressData = new FormGroup({
    fullName: new FormControl(),
    phoneNumber: new FormControl(),
    address: new FormControl(),
    city: new FormControl(),
    state: new FormControl(),
    zipCode: new FormControl(),
  });

  addAddress() {
    const url = 'http://localhost:8080/addressBook/set';

    this.http
      .post(url, this.addressData.value, { responseType: 'text' })
      .subscribe(
        (response) => {
          console.log(response);
          console.log(this.addressData.value);
          if (response == 'Added address successfully') {
            this.router.navigate(['/']);
          }
        },
        (error) => {
          console.error('Error occurred:', error);
        }
      );
  }

  backButton() {
    this.router.navigate(['/']);
  }
  resetButton() {
    window.location.reload();
  }
}
