import React from 'react';
import { Field, reset, reduxForm } from 'redux-form';
import { renderTextField } from '../../../forms/textField';
import { validate } from './FormConsultaValidate';

/*
    Formulário de consulta de cliente baseado em Redux-Form
*/

let FormConsulta = props => {
    const { handleSubmit } = props;

    return (
        <form onSubmit={handleSubmit}>

            <Field
                name="dataMin"
                component={renderTextField}
                label="Data Início:"
                placeholder="Informe a data de início"
                type="date" />

            <Field
                name="dataMax"
                component={renderTextField}
                label="Data Fim:"
                placeholder="Informe a data de fim"
                type="date" />

            <input type="submit"
                value="Pesquisar Clientes"
                className="btn btn-primary"/>

        </form>
    )
}

//registrando como um redux-form
FormConsulta = reduxForm({
    form : 'FormConsulta',
    validate
})(FormConsulta);

export default FormConsulta;