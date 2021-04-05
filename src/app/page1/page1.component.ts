import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  fromUser: number; toUser: number;
  smsMessage: string; smsToUser: number;
  whatsappMessage: string; whatsappToUser: number;

  arrayStatus: boolean = true;
  changeStatus(){
    this.arrayStatus = !this.arrayStatus;
  }

  url1 = 'http://twilio-whatsapp-demo.us-e2.cloudhub.io/api/sendsms';
  url2 = 'http://twilio-whatsapp-demo.us-e2.cloudhub.io/api/getsms';
  url3 = 'http://twilio-whatsapp-demo.us-e2.cloudhub.io/api/sendwhatsapp';

 
  constructor(private http: HttpClient) { }

  smsResponse;
  ngOnInit(): void {
  }

  getSms(){
    console.log(this.fromUser,this.toUser)
    //let sampleHeader = { headers: new HttpHeaders({ 'Access-Control-Allow-Origin': "http://localhost:8081"}) };  
    let data = {
      From: this.fromUser,
      To: this.toUser
    }
    this.http.post(this.url2,data).subscribe(
      data => {
        //console.log(this.getSmsResponse);
        this.smsResponse = data;
      },
      error => {
        console.log(error);
      }
    );
    //console.log(this.getSmsResponse);
  }
  sendSms(){
    console.log(this.smsToUser,this.smsMessage)
    let data1 = {
      Body: this.smsMessage,
      To: this.smsToUser
    }
    this.http.post(this.url1,data1).subscribe(
      data => {
        console.log(data);
        this.smsResponse = data;

      },
      error => {
        console.log(error);
      }
    );
  }
  sendWhatsapp(){
    console.log(this.whatsappToUser,this.whatsappMessage)
    let data2 = {
      Message: this.whatsappMessage,
      ToNumber: this.whatsappToUser
    }
    this.http.post(this.url3,data2).subscribe(
      data => {
        console.log(data);
        this.smsResponse = data;

      },
      error => {
        console.log(error);
      }
    );



    
  }

}
