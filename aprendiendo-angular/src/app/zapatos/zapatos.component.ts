import {Component, OnInit} from '@angular/core';
import {ZapatosService} from '../service/zapatos.service'
import {Zapatos} from '../models/zapatos' 
@Component({
    selector:'zapatos',
    templateUrl:'./zapatos.component.html',
    providers: [ZapatosService]
})
export class ZapatosComponent implements OnInit{
    public zapatos: Array<Zapatos>
    public title: string = 'Componente De zapatos';
    public arry :string[];
    public color: string;
    public my_marca:string;

    constructor(
        private _ZapatosService: ZapatosService
    ){
        this.zapatos = []
        this.my_marca = ''
        this.color = 'blue'
        this.arry = new Array();
        
    }
    
    ngOnInit(){
        this.zapatos = this._ZapatosService.getZapatos();
        this.marcas()
    }
    marcas(){
        this.zapatos.forEach((zapatos, index)=>{
            if(this.arry.indexOf(zapatos.marca)){
                this.arry.push(zapatos.marca)
            }
            
            console.log(index)
        })
        console.log(this.arry)
    }
    getMarca(){
        alert(this.my_marca)
    }
    addMarca(){
        if(this.my_marca != ''){
            this.arry.push(this.my_marca)
        }
        console.log('The input is empty')
        
    }
    delteMarca(){
        let marca:number = this.arry.indexOf(this.my_marca)
        if(marca){
            this.arry.splice(marca, 1)
        }
        console.log('The input is empty')
    }

    deleteMarca(index:number){

        delete this.arry[index]
    }

    onBlur(){
        console.log('Has salido del input')
    }

    showWord(){
        alert(this.my_marca)
    }
}