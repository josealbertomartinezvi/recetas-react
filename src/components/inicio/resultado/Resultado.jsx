import React, { Component, Fragment } from 'react';

/**
 * Componente que muesta los ingredientes seleccionados por el para cada una de las preparaciones (sopa o ensalada de frutas)
 */
class Resultado extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render(){
        return (
            <Fragment>
                {
                    (this.props.preparacion !== '') ? 
                    <div>
                        <h2>Ingredientes para preparar una { this.props.preparacion }.</h2> 
                        <br/>
                        {
                            (this.props.resultado !== '') ? 
                            <div>
                                <h5>Ingredientes: { this.props.resultado }</h5>
                            </div>
                            : ''
                        }
                    </div>
                    : ''
                }
            </Fragment>
        );
    }
}

export default Resultado;