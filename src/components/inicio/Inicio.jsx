import React, { Fragment } from 'react';

import Ingredientes from './ingredientes/Ingredientes';
import Descripcion from './descripcion/Descripcion';
import Resultado from './resultado/Resultado';

const Inicio = () => (
    <Fragment>
        <div className="row">
            <div className="form-group col-12 col-md-6">
                <Ingredientes />
            </div>
            <div className="form-group col-12 col-md-6">
                <Descripcion />
            </div>
        </div>
        <div className="row">
            <div className="form-group col-12 col-md-12">
                <Resultado />
            </div>
        </div>
    </Fragment>
)

export default Inicio;