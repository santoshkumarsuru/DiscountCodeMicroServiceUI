import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AdminService {
  
  constructor(private http: HttpClient) { }

  getAdmins() {
    return this.http.get("/getRecipients");
  }

  addAdmin(recipient: any): any {
    return this.http.post("/addRecipient", recipient);    
  }

  deleteAdmin(recipientId: any): any {
    return this.http.post("/deleteRecipient?recipientId=" + recipientId, {});    
  }

  getOffers(): any {
    return this.http.get("/getSpecialOffers");
  }
  addOffer(offer: any): any {
    return this.http.post("/addSpecialOffer", offer);    
  }

  deleteOffer(offerId: any): any {
    return this.http.post("/deleteSpecialOffer?specialOfferId=" + offerId, {}); 
  }

  getDiscountCodesByEmail(emailId: any): any {
    return this.http.post("/getAllDiscountCodesByEmail?email=" + emailId, {}); 
  }

  redeemDiscountCode(disc: any): any {
    return this.http.post("/redeemDiscountCode", disc); 
  }

  validateDiscountCode(disc: any): any {
    return this.http.post("/validateAndGetDiscountCode", disc); 
  }
}