import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AdminService {
  
  constructor(private http: HttpClient) { }

  getAdmins() {
    return this.http.get("http://localhost:8080/getRecipients");
  }

  addAdmin(recipient: any): any {
    return this.http.post("http://localhost:8080/addRecipient", recipient);    
  }

  deleteAdmin(recipientId: any): any {
    return this.http.post("http://localhost:8080/deleteRecipient?recipientId=" + recipientId, {});    
  }

  getOffers(): any {
    return this.http.get("http://localhost:8080/getSpecialOffers");
  }
  addOffer(offer: any): any {
    return this.http.post("http://localhost:8080/addSpecialOffer", offer);    
  }

  deleteOffer(offerId: any): any {
    return this.http.post("http://localhost:8080/deleteSpecialOffer?specialOfferId=" + offerId, {}); 
  }

  getDiscountCodesByEmail(emailId: any): any {
    return this.http.post("http://localhost:8080/getAllDiscountCodesByEmail?email=" + emailId, {}); 
  }

}