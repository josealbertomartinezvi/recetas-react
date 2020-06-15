import React, { Fragment, Component } from 'react';

import Preparaciones from './recetas/preparaciones/Preparaciones';
import Ingredientes from './recetas/ingredientes/Ingredientes';
import Resultado from './resultado/Resultado';
import Resumen from './resumen/Resumen';

import construirResultado from '../../helpers/constructor';
import asignarArray from '../../helpers/asignador';

import recetaService from '../../services/RecetaService';

class Inicio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            preparacion: '',
            ingredientes: [],
            resultado: ''
        }
    }

    guardarReceta = () => {
        if(this.state.ingredientes.length === 0){
            alert('No ha seleccionado ningun ingrediente.');
        }else{
            recetaService.saveReceta(this.state).then( res => {
                alert(res.data.message);
                this.setState({
                    preparacion: '',
                    ingredientes: [],
                    resultado: ''
                });
            }, error => {
                console.log(error)
            })
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
                        <br/>
                        <Resumen preparacion = { this.state.preparacion } ingredientes = { this.state.ingredientes } />
                    </div>
                </div>
                <button onClick={ this.guardarReceta } className="btn btn-success float-right">Guardar</button>
            </Fragment>
        )
    }
}

export default Inicio;