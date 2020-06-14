import React, { Component, Fragment } from 'react';

class Resumen extends Component {
    state = { 

    }
    render(){
        return (
            <Fragment>
                <h1>Resumen</h1>
                <ul className="list-group">
                    <li className="list-group-item">
                        El usuario ha seleccionado preparar una <strong>{ this.props.preparacion }</strong>
                    </li>
                    <li className="list-group-item">
                        Se requieren <strong>{ this.props.ingredientes.length }</strong> { ( this.props.preparacion === 'ensalada de frutas') ? 'fruta(s)' : ( this.props.preparacion === 'sopa') ? 'ingrediente(s)' : '' }
                    </li>
                </ul>
            </Fragment>
        );
    }
}

export default Resumen;