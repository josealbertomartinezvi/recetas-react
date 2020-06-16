import React, { Component, Fragment } from 'react';

/**
 * Componente que muesta el resumen final de la preparación
 */
class Resumen extends Component {
    state = { 

    }
    render(){
        return (
            <Fragment>
                {
                    (this.props.preparacion !== '') ? 
                        <div>
                            <h1>Resumen</h1>
                            <ul className="list-group">
                                <li className="list-group-item">
                                    El usuario ha seleccionado preparar una <strong>{ this.props.preparacion }</strong>
                                </li>
                                <li className="list-group-item">
                                    Se requieren <strong>{ this.props.ingredientes.length }</strong> { ( this.props.preparacion === 'ensalada de frutas') ? 'fruta(s)' : ( this.props.preparacion === 'sopa') ? 'ingrediente(s)' : '' }
                                </li>
                            </ul>                        
                        </div>
                    : ''
                }
            </Fragment>
        );
    }
}

export default Resumen;