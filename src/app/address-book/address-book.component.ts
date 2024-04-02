import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { response } from 'express';

@Component({
  selector: 'app-address-book',
  templateUrl: './address-book.component.html',
  styleUrl: './address-book.component.css',
})
export class AddressBookComponent {
  data: any;
  deletionMessage: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.getAddress();
  }

  getAddress() {
    const url = 'http://localhost:8080/addressBook/get';

    this.http.get<any>(url).subscribe((response) => {
      console.log(response);
      this.data = response;
    });
  }

  deleteAddress(id: any) {
    const url = 'http://localhost:8080/addressBook/delete/' + id;
    this.http.delete(url, { responseType: 'text' }).subscribe(
      (response) => {
        console.log(response);
        this.deletionMessage = response; // Store the deletion message
        this.getAddress(); // Optionally, fetch updated data after deletion
      },
      (error) => {
        console.error('Error occurred:', error);
        this.deletionMessage = ''; // Reset deletion message on error
      }
    );
  }
}
