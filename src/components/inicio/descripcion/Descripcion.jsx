import React, { Component, Fragment } from 'react';

class Descripcion extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render(){
        return (
            <Fragment>
                {
                    (this.props.preparacion != '') ? 
                    <h2>Ingredientes para preparar una { this.props.preparacion }.</h2> : ''
                }
            </Fragment>
        );
    }
}

export default Descripcion;