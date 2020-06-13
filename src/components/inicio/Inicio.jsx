import React, { Fragment } from 'react';

import Ingredientes from './ingredientes/Ingredientes';
import Descripcion from './descripcion/Descripcion';
import Resultados from './resultados/Resultados';

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
                <Resultados />
            </div>
        </div>
    </Fragment>
)

export default Inicio;