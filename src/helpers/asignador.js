/**
 * 
 * @param { Array } ingredientes 
 * @param { string } ingredienteSeleccionado 
 * 
 * Modulo encargado de registrar un nuevo ingrediente en el arreglo [ ingredientes ], al mismo tiempo validando si el ingrediente 
 * existe en el arreglo, si es asi lo elimina sino lo agrega.
 */

module.exports = function(ingredientes, ingredienteSeleccionado){

    let encontrado = -1;
    let cantidad = 0;

    // valida si el ingrediente seleccionado existe en el arreglo
    ingredientes.map(( ingrediente, index ) => {

        if(ingrediente['ingredienteSeleccionado'] === ingredienteSeleccionado){
            encontrado = index;
        }

    });

    // Si existe lo agrega sino lo elimina
    if(encontrado === -1){
        if(ingredienteSeleccionado === 'manzana'){
            cantidad = prompt("Ingrese la cantidad de manzanas");
            if(cantidad !== null) {
                ingredientes.push({ingredienteSeleccionado, cantidad});
            }
        }else{
            ingredientes.push({ingredienteSeleccionado, cantidad});
        }
    }else{
        ingredientes = ingredientes.filter(( ingrediente, index ) => ingredienteSeleccionado !== ingrediente['ingredienteSeleccionado']);
    }

    return ingredientes;
}