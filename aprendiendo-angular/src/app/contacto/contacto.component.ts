import { Component, OnInit } from '@angular/core';
import {ContactoUser} from '../models/contacto.user'

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  
  public user: ContactoUser;

  constructor() { 
    this.user = new ContactoUser('', '','', '')
   }

  ngOnInit(): void {
  }

  onSubmit(form:any){
    console.log(this.user)
  }
}
