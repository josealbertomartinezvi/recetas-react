module.exports = function(array){

    let resultado = '';

    array.map(( palabra, index ) => {
        if(index === 0){
            if(array.length === 1){
                resultado = resultado + palabra.charAt(0).toUpperCase() + palabra.slice(1) + '.';
            }else{
                resultado = resultado + palabra.charAt(0).toUpperCase() + palabra.slice(1);
            }
        }else{
            if(array.length >= 1 && index < array.length - 1){
                resultado = resultado + ', ' + palabra;
            }else if(index === array.length - 1){
                resultado = resultado + ' y ' + palabra + '.';
            }
        }
    });

    return resultado;
}