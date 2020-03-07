import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from './admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  users: any = [];
  offers: any = [];
  user: any = {
    name: '',
    email: ''
  };

  offer: any = {
    offerName: '',
    discountPercent: ''
  }

  constructor(private router: Router, private adminService: AdminService) { }

  ngOnInit(): void {
    this.getReceipients();
    this.getOffers();
  }

  getReceipients() {
    this.adminService.getAdmins()
    .subscribe((data) => {
      console.log(data);
      this.users = data['recipients'];
    });
  }

  getOffers() {
    this.adminService.getOffers()
    .subscribe((data) => {
      console.log(data);
      this.offers = data['specialOffers'];
    });
  }

  edit(admin: any): void {
  }

  delete(admin: any): void {
    this.adminService.deleteAdmin(admin.id)
    .subscribe((data) => {
      this.getReceipients();
    });
  }

  deleteOffer(offer: any): void {
    this.adminService.deleteOffer(offer.id)
    .subscribe((data) => {
      this.getOffers();
    });
  }

  add(): void {
    this.adminService.addAdmin(this.user)
    .subscribe((data) => {
      this.user = {
        name: '',
        email: ''
      };
      this.getReceipients();
    });
  }

  addOffer(): void {
    this.adminService.addOffer(this.offer)
    .subscribe((data) => {
      this.offer = {
        offerName: '',
        discountPercent: ''
      };
      this.getOffers();
    });
  }
}
