import { Component, OnInit } from '@angular/core';
import {Mobile} from '../model/mobile.model'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contacts: Mobile[] = [];
  firstname!: string;
  lastname!: string;
  company!: string;
  mobile!: {
        mobile: number;
        phone: number;
        email: string;
    };
  address!: string;
  birthday!: string;
  date!: Date;
  nickname!: string;
  socialProfile!: string;
  instantMessage!: string;
  notes!: string;

  constructor() { }

  ngOnInit(): void {
    this.contacts = [
      {
        firstname:"Tosimi",
        lastname:"Adesoye",
        company:"Blue Prism",
        mobile:{
            "mobile": 111,
            "phone": 222 ,
            "email":"tosimi@gmail.com"    
        },
        address: "yaun street",
        birthday: "6/9/2000",
        date: new Date(),
        nickname:"simi",
        socialProfile: "instagram",
        instantMessage: "whatsapp",
        notes:"I love you!"
    }    
    ]
  }

  createContact(){
    this.contacts.push({
      firstname:this.firstname,
      lastname:this.lastname,
      company:this.company,
      mobile:this.mobile,
      address: this.address,
      birthday: this.birthday,
      date: this.date,
      nickname:this.nickname,
      socialProfile: this.socialProfile,
      instantMessage: this.instantMessage,
      notes:this.notes
    });

    this.firstname = "";
    this.lastname = "";
    this.company = "";
    this.mobile;
    this.address = "";
    this.birthday = "";
    this.date;
    this.nickname = "";
    this.socialProfile = "";
    this.instantMessage = "";
    this.notes = "";

  }

}
