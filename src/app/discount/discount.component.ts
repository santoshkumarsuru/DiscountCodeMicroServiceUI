import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin/admin.service';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.css']
})
export class DiscountComponent implements OnInit {

  users: any = [];
  offers: any = [];
  emailForDisCode: any;
  discountInfos: any = [];
  redeemResp: any = null;
  valDiscResp: any = null;
  dicount: any = {
    email: '',
    discountCode: ''
  }
  valdiscount: any = {
    email: '',
    specialOfferName: '',
    expiryDate: ''
  }
  constructor(private adminService: AdminService) { }

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

  redeemDisc() {
    this.adminService.redeemDiscountCode(this.dicount)
    .subscribe((data) => {
      console.log('disc', data);
      this.redeemResp = data['responseStatus'];
    });
  }

  redeemDiscFromTile(offer) {
    let disc = {};
    disc['email'] = this.emailForDisCode;
    disc['discountCode'] = offer['discountCode'];
    this.adminService.redeemDiscountCode(disc)
    .subscribe((data) => {
      console.log('disc', data);
      this.redeemResp = data['responseStatus'];
      if (this.redeemResp['status'] == 'ERROR') {
        alert(this.redeemResp['errorMessage']);
      } else {
        alert('Successfully Redeemed');        
      }
      this.getCodes();
    });
  }

  validate() {
    let dateArr = this.valdiscount['expiryDate'].replace('-', '/').replace('-', '/');
    this.valdiscount['expiryDate'] = dateArr;  
    this.adminService.validateDiscountCode(this.valdiscount)
    .subscribe((data) => {
      console.log('val', data);
      this.valDiscResp = data['responseStatus'];
    });
  }

  getCodes() {
    this.adminService.getDiscountCodesByEmail(this.emailForDisCode)
    .subscribe((data) => {
      console.log('disc', data);
      this.discountInfos = data['discountInfos'];
    });
  }

}
