module.exports = function(ingredientes, ingredienteSeleccionado){

    let encontrado = -1;
    let manzana = '';

    ingredientes.map(( ingrediente, index ) => {

        if(ingredienteSeleccionado == 'manzana'){
            ingrediente = ingrediente.split(" ")[1];
            if(ingrediente === 'manzana' || ingrediente === 'manzanas'){
                manzana = ingrediente;
                encontrado = index;
            }
        }else{
            if(ingrediente === ingredienteSeleccionado){
                encontrado = index;
            }
        }

    });

    if(encontrado === -1){
        if(ingredienteSeleccionado == 'manzana'){
            let cantidad = prompt("Ingrese la cantidad de manzanas");

            if(cantidad !== null) {
                if(cantidad == 1){
                    ingredientes.push(cantidad + ' ' + ingredienteSeleccionado);
                }else{
                    ingredientes.push(cantidad + ' manzanas');
                }
            }
        }else{
            ingredientes.push(ingredienteSeleccionado);
        }
    }else{
        if(ingredienteSeleccionado == 'manzana'){
            ingredientes = ingredientes.filter(( ingrediente, index ) => manzana !== ingrediente.split(" ")[1]);
        }else{
            ingredientes = ingredientes.filter(( ingrediente, index ) => ingredienteSeleccionado !== ingrediente);
        }
    }

    return ingredientes;
}