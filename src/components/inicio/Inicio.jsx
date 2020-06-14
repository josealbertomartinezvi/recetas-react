import React, { Fragment, Component } from 'react';

import Preparaciones from './recetas/preparaciones/Preparaciones';
import Ingredientes from './recetas/ingredientes/Ingredientes';
import Resultado from './resultado/Resultado';
import Resumen from './resumen/Resumen';

import construirResultado from '../../helpers/constructor';
import asignarArray from '../../helpers/asignador';

class Inicio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            preparacion: '',
            ingredientes: [],
            resultado: ''
        }
    }

    asignarPreparacion = tipo => () => {
        this.setState({
            preparacion: tipo,
            ingredientes: [],
            resultado: ''
        });
    }

    asignarIngrediente = ingredienteSeleccionado => () => {
        let ingredientes = asignarArray(this.state.ingredientes, ingredienteSeleccionado);
        let resultado = construirResultado(ingredientes);
        this.setState({
            ingredientes,
            resultado
        });
    }

    render() {
        return (
            <Fragment>
                <div className="row">
                    <div className="form-group col-12 col-md-6">
                        <div className="row">
                            <Preparaciones tipoPreparacion = { this.asignarPreparacion } />
                        </div>
                        <div className="row">
                            <Ingredientes ingrediente = { this.asignarIngrediente } preparacion={ this.state.preparacion } />
                        </div>
                    </div>
                    <div className="form-group col-12 col-md-6">
                        <Resultado preparacion = { this.state.preparacion } resultado = { this.state.resultado } />
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-12 col-md-12">
                        <Resumen />
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Inicio;