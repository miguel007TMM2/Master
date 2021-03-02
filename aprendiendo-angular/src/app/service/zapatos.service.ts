import{ Injectable} from '@angular/core'
import {Zapatos} from '../models/zapatos' 

@Injectable()
export class ZapatosService{

    public zapatos: Array<Zapatos>
    constructor(){
        this.zapatos = [
            new Zapatos('Rebook classic', 140, 'Blanco', 'Rebook', true),
            new Zapatos('jordan 6', 90, 'Rojo', 'Jordan', true),
            new Zapatos('Nike Runner', 90, 'Rojo', 'Nike', true),
            new Zapatos('Addidas Yezzy', 60, 'Negro', 'Adiddas', true)
        ];
    }
    getZapatos(): Array<Zapatos>{
        return this.zapatos;
    }
}