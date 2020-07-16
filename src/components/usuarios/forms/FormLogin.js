import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { renderTextField } from '../../../forms/textField';
import { validate } from './FormLoginValidate';

let FormLogin = props => {
    const { handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit}>

            <Field
                name="email"
                component={renderTextField}
                label="Email de Acesso"
                type="email"
                placeholder="Digite aqui"
            />

            <Field
                name="senha"
                component={renderTextField}
                label="Senha de Acesso"
                type="password"
                placeholder="Digite aqui"
            />

            <input type="submit" value="Acessar Sistema"
                className="btn btn-primary btn-user btn-block"/>

        </form>
    )
}

FormLogin = reduxForm({
    form : 'FormLogin',
    validate
})(FormLogin);

export default FormLogin;