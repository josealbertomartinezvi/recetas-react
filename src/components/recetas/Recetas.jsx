import React, { Fragment, Component } from 'react';

/**
 *  Servicio para cominicación con la API
 */
import recetaService from '../../services/RecetaService';

/**
 * Helpers (Codigo de funcionaalidad reutilizable)
 */
import construirResultado from '../../helpers/constructor';

/**
 * Componente encargado de obtener y visualizar las recetas registradas
 */
class Recetas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            preparaciones: []
        }
    }

    /**
     * Metodo ejecutado antes de lanzar el componente
     */
    componentDidMount() {
        recetaService.getRecetas().then( res => {
            this.setState({
                preparaciones: res.data.data,
            });
        }, error => {
            console.log(error)
        })
    }

    render() {
        return (
            <Fragment>
                <h2 className="text-center">Recetas Guardadas</h2>
                <br/>
                <ul className="list-group">
                    { 
                        this.state.preparaciones.map((item, index) => (
                            <li key={item.id} className="list-group-item">
                                <div className="row justify-content-between align-items-center">
                                    <div className="col-md-8">
                                        <h4><strong>{ index + 1}. Receta para una { item.preparacion }.</strong></h4>
                                        Se requieren <strong>{ item.ingredientes.length }</strong> ingredientes.
                                        <br/>
                                        Ingredientes: {construirResultado(item.ingredientes)}
                                    </div>
                                </div> 
                            </li>
                        ))
                    }
                </ul>
            </Fragment>
        )
    }
}

export default Recetas;