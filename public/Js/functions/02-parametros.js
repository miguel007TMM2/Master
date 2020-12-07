function listadodefrutas(fruta1, fruta2, ...resto_de_frutas) {
    console.log('fruta1: ', fruta1);    
    console.log('fruta2: ', fruta2); 
    console.log('resto de fruta', resto_de_frutas); 
}

listadodefrutas('manzana', 'aguacate', 'pera', 'sandia', 'melon');

var frutas = ['melon', 'banana'];

listadodefrutas(...frutas, 'mango', 'coco','piña');