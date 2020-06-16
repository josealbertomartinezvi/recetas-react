import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import './preparaciones.css';

/**
 * Componente encargado se seleccionar el tipo de preparación sea la sopa o la end¿salada de frutas
 */
class Preparaciones extends Component {

    static propTypes = {
        tipoPreparacion: PropTypes.func.isRequired
    }

    render(){
        const { tipoPreparacion } = this.props;

        return (
            <Fragment>
                <div className="row mb-4">
                    <div className="col-12 col-md-12 text-aling-center">
                        <button
                            type="button"
                            className="btn btn-success float-right"
                            onClick={ tipoPreparacion('sopa') }
                        >
                            Sopa
                        </button>
                        <button 
                            type="button" 
                            className="btn btn-success float-right"
                            onClick={ tipoPreparacion('ensalada de frutas') }
                        >
                            Ensala de frutas
                        </button>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Preparaciones;