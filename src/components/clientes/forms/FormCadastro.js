import React from 'react';
import { Field, reset, reduxForm } from 'redux-form';
import { renderTextField } from '../../../forms/textField';
import { validate } from './FormCadastroValidate';

/*
    Formulário de cadastro de cliente baseado em Redux-Form
*/

let FormCadastro = props => {
    const { handleSubmit } = props;

    return (
        <form onSubmit={handleSubmit}>

            <Field
                name="nome"
                component={renderTextField}
                label="Nome do Cliente:"
                placeholder="Informe o nome do cliente"
                type="text" />

            <Field
                name="email"
                component={renderTextField}
                label="Endereço de Email:"
                placeholder="Informe o email do cliente"
                type="email" />

            <input type="submit"
                value="Cadastrar Cliente"
                className="btn btn-success" />

        </form>
    )
}

//função para limpar os campos do formulário após o SUBMIT
const afterSubmit = (result, dispatch) => 
    dispatch(reset('FormCadastro'));

//registrando como um redux-form
FormCadastro = reduxForm({
    form: 'FormCadastro',
    validate,
    onSubmitSuccess : afterSubmit
})(FormCadastro);

export default FormCadastro;