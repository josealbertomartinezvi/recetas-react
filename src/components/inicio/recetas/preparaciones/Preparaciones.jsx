import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class Preparaciones extends Component {

    static propTypes = {
        tipoPreparacion: PropTypes.func.isRequired
    }

    render(){
        const { tipoPreparacion } = this.props;

        return (
            <Fragment>
                <div className="row">
                    <div className="col align-self-start">
                        <button
                            type="button"
                            className="btn btn-success float-right"
                            onClick={ tipoPreparacion('sopa') }
                        >
                            Sopa
                        </button>
                    </div>
                    <div className="col align-self-end">
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