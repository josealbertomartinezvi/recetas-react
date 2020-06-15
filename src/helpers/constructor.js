module.exports = function(array){

    let resultado = '';

    array.map(( palabra, index ) => {
        let manzana = false;
        if(palabra['ingredienteSeleccionado'] === 'manzana'){
            if(palabra['cantidad'] === "1"){
                palabra['ingredienteSeleccionado'] = '1 manzana';
            }else if(palabra['cantidad'] !== "1"){
                palabra['ingredienteSeleccionado'] = `${ palabra['cantidad'] } manzanas`;
            }
            manzana = true;
        }
        if(index === 0){
            if(array.length === 1){
                resultado = resultado + palabra['ingredienteSeleccionado'].charAt(0).toUpperCase() + palabra['ingredienteSeleccionado'].slice(1) + '.';
            }else{
                resultado = resultado + palabra['ingredienteSeleccionado'].charAt(0).toUpperCase() + palabra['ingredienteSeleccionado'].slice(1);
            }
        }else{
            if(array.length >= 1 && index < array.length - 1){
                resultado = resultado + ', ' + palabra['ingredienteSeleccionado'];
            }else if(index === array.length - 1){
                resultado = resultado + ' y ' + palabra['ingredienteSeleccionado'] + '.';
            }
        }
        if(manzana){
            palabra['ingredienteSeleccionado'] = 'manzana';
        }
    });

    return resultado;
}