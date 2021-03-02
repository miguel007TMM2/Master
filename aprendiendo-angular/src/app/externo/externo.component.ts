import { Component, OnInit } from '@angular/core';
import {PeticionesService} from '../service/peticiones.service'
import { User} from '../models/user'

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers:[PeticionesService]
})
export class ExternoComponent implements OnInit {

  public user:any;
  public userId:string;
  public fecha: any;

  public newUser:User;
  constructor(
    private _peticionesService : PeticionesService
  ) { 
    this.userId = '1'
    this.newUser = new User('','')
  }

  ngOnInit(){
    this.fecha = new Date
    this.cargarUser()
  }
  
  cargarUser(){
    this._peticionesService.getUser(this.userId).subscribe(
      result =>{
        this.user = result

      },
      error =>{
        console.log(<any> error) 
      }

    )
  }

  // onSubmit(form:any){
  //   this._peticionesService.getUser(this.newUser).subscribe(
  //     res=>{
  //       console.log(res)
  //       form.reset()
  //     },
  //     error =>{
  //       console.log(error)
  //     }
  //   )
  // }
}
