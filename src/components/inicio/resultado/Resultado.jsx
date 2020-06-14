import React, { Component, Fragment } from 'react';

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
                                Resultado: { this.props.resultado }
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