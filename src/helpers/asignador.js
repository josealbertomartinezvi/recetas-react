module.exports = function(ingredientes, ingredienteSeleccionado){

    let encontrado = -1;
    let cantidad = 0;

    ingredientes.map(( ingrediente, index ) => {

        if(ingrediente['ingredienteSeleccionado'] === ingredienteSeleccionado){
            encontrado = index;
        }

    });

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