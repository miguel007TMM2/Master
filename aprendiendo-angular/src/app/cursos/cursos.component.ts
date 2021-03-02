import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router'
import { __param } from 'tslib';

@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  public name: string;
  public followare: string;

  constructor(private _route: ActivatedRoute, private _router: Router){ 
    this.name = ''
    this.followare = ''
   }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params)=>{
      this.name = params.nombre
      this.followare = params.seguidores
      
    })

  }
  redirect(){
    this._router.navigate(['/Zapatos'])
  }

}
