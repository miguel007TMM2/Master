import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
    name: 'calculadora'
})
export class CalculadoraPipe implements PipeTransform{
    //dato | calculadora: otrodato
    // oaram1             param2
    transform(value:any, value_twe:any){
        let operaciones = `
            Suma: ${value + value_twe} -
            Resta:  ${value - value_twe} -
            Multiplicacion:  ${value * value_twe} -
            Division:  ${value / value_twe} 
        `
        return operaciones;
    }
}