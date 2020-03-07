import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin/admin.service';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.css']
})
export class DiscountComponent implements OnInit {

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
