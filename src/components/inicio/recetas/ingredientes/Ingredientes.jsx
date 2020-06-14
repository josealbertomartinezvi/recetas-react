import React, { Component, Fragment } from 'react';

import Sopa from './sopa/Sopa';
import Ensalada from './ensalada/Ensalada';

class Ingredientes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredientes: ''
        }
    }

    agregarIngrediente = tipo => () => {
        this.setState({
            ingredientes: tipo
        });
    }
    render(){
        return (
            <Fragment>
                {
                    (this.props.preparacion === 'ensalada de frutas') ? 
                        <Ensalada agregarIngrediente={ this.agregarIngrediente } /> :
                    (this.props.preparacion === 'sopa') ? 
                        <Sopa agregarIngrediente={ this.agregarIngrediente } /> : ''
                }
            </Fragment>
        );
    }
}


export default Ingredientes;