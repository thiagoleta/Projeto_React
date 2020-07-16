import React from 'react';
import { Field, reset, reduxForm } from 'redux-form';
import { renderTextField } from '../../../forms/textField';
import { validate } from './FormRegisterValidate';

let FormRegister = props => {
    const { handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit}>

            <Field
                name="nome"
                component={renderTextField}
                label="Nome do Usuário"
                type="text"
                placeholder="Digite aqui"
            />      

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

            <Field
                name="senhaConfirmacao"
                component={renderTextField}
                label="Confirme sua Senha"
                type="password"
                placeholder="Digite aqui"
            />

            <input type="submit" value="Realizar Cadastro"
                className="btn btn-primary btn-user btn-block"/>

        </form>
    )
}

//função para limpar os campos do formulário após o SUBMIT
const afterSubmit = (result, dispatch) => 
    dispatch(reset('FormRegister'));

FormRegister = reduxForm({
    form : 'FormRegister',
    validate,
    onSubmitSuccess : afterSubmit
})(FormRegister);

export default FormRegister;