import React, { Fragment, Component } from 'react';

import Preparaciones from './recetas/preparaciones/Preparaciones';
import Ingredientes from './recetas/ingredientes/Ingredientes';
import Descripcion from './descripcion/Descripcion';
import Resultado from './resultado/Resultado';

class Inicio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            preparacion: ''
        }
    }

    asignarPreparacion = tipo => () => {
        this.setState({
            preparacion: tipo
        });
    }

    render() {
        return (
            <Fragment>
                <div className="row">
                    <div className="form-group col-12 col-md-6">
                        <div className="row">
                            <Preparaciones tipoPreparacion={ this.asignarPreparacion } />
                        </div>
                        <div className="row">
                            <Ingredientes preparacion={ this.state.preparacion } />
                        </div>
                    </div>
                    <div className="form-group col-12 col-md-6">
                        <Descripcion preparacion = { this.state.preparacion } />
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-12 col-md-12">
                        <Resultado />
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Inicio;