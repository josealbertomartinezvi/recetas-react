/**
 * 
 * @param { Array } ingredientes 
 * 
 * Intera entre los ingredientes del arreglo para armar un parrafo a partir los ingredientes seleccionados, 
 * ejemplo. [ Ingredientes: Patilla, banano, fresa y 5 manzanas.]
 * 
 */

module.exports = function(ingredientes){

    let resultado = '';

    ingredientes.map(( ingrediente, index ) => {
        let manzana = false;
        if(ingrediente['ingredienteSeleccionado'] === 'manzana'){
            if(ingrediente['cantidad'] === "1"){
                ingrediente['ingredienteSeleccionado'] = '1 manzana';
            }else if(ingrediente['cantidad'] !== "1"){
                ingrediente['ingredienteSeleccionado'] = `${ ingrediente['cantidad'] } manzanas`;
            }
            manzana = true;
        }
        // Identifica si es el primer elemento para convertir la primera letra en mayuscula sino asisna [ ',' ó 'y' ] segun sea el caso
        if(index === 0){
            if(ingredientes.length === 1){
                resultado = resultado + ingrediente['ingredienteSeleccionado'].charAt(0).toUpperCase() + ingrediente['ingredienteSeleccionado'].slice(1) + '.';
            }else{
                resultado = resultado + ingrediente['ingredienteSeleccionado'].charAt(0).toUpperCase() + ingrediente['ingredienteSeleccionado'].slice(1);
            }
        }else{
            if(ingredientes.length >= 1 && index < ingredientes.length - 1){
                resultado = resultado + ', ' + ingrediente['ingredienteSeleccionado'];
            }else if(index === ingredientes.length - 1){
                resultado = resultado + ' y ' + ingrediente['ingredienteSeleccionado'] + '.';
            }
        }
        if(manzana){
            ingrediente['ingredienteSeleccionado'] = 'manzana';
        }
    });

    return resultado;
}