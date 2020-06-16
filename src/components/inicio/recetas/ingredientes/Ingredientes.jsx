import React, { Component, Fragment } from 'react';

import Sopa from './sopa/Sopa';
import Ensalada from './ensalada/Ensalada';

/**
 * Componente que muestra la imagen seleccionada (para la ensalada de frutas o para la sopa)
 */
class Ingredientes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render(){
        return (
            <Fragment>
                {
                    (this.props.preparacion === 'ensalada de frutas') ? 
                        <Ensalada agregarIngrediente={ this.props.ingrediente } /> :
                    (this.props.preparacion === 'sopa') ? 
                        <Sopa agregarIngrediente={ this.props.ingrediente } /> : ''
                }
            </Fragment>
        );
    }
}


export default Ingredientes;