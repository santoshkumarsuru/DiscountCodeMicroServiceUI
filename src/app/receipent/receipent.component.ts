import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReceipentService } from './recepient.service';

@Component({
  selector: 'app-receipent',
  templateUrl: './receipent.component.html',
  styleUrls: ['./receipent.component.css']
})
export class ReceipentComponent implements OnInit {

  receipents: any;
  offers: any;
  user: any = {
    name: '',
    email: ''
  };

  offer: any = {
    offerName: '',
    discountPercent: ''
  }

  constructor(private router: Router, private receipentService: ReceipentService) { }

  ngOnInit(): void {
    this.getReceipients();
    this.getOffers();
  }

  getReceipients() {
    this.receipentService.getReceipents()
    .subscribe((data) => {
      console.log(data);
      this.receipents = data;
    });
  }

  getOffers() {
    this.receipentService.getOffers()
    .subscribe((data) => {
      console.log(data);
      this.offers = data;
    });
  }

  edit(receipent: any): void {
  }

  delete(receipent: any): void {
    this.receipentService.deleteReceipent(receipent.id)
    .subscribe((data) => {
      this.getReceipients();
    });
  }

  deleteOffer(offer: any): void {
    this.receipentService.deleteOffer(offer.id)
    .subscribe((data) => {
      this.getOffers();
    });
  }

  add(): void {
    this.receipentService.addReceipent(this.user)
    .subscribe((data) => {
      this.user = {
        name: '',
        email: ''
      };
      this.getReceipients();
    });
  }

  addOffer(): void {
    this.receipentService.addOffer(this.offer)
    .subscribe((data) => {
      this.offer = {
        offerName: '',
        discountPercent: ''
      };
      this.getOffers();
    });
  }
}
