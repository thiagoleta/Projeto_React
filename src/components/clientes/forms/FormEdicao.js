import React from 'react';
import { Field, reset, reduxForm } from 'redux-form';
import { renderTextField } from '../../../forms/textField';
import { renderHiddenField } from '../../../forms/hiddenField';
import { validate } from './FormEdicaoValidate';
import { connect } from 'react-redux';

/*
    Formulário de edição de cliente baseado em Redux-Form
*/

//função para ler os dados do state de cliente (clienteReducer)
const mapStateToProps = (state) => {
    return{

        initialValues: { //preencher os campos do formulário
            idCliente : state.cliente.clienteEdicao.idCliente,
            nome : state.cliente.clienteEdicao.nome,
            email : state.cliente.clienteEdicao.email
        }

    }
}

let FormEdicao = props => {
    const { handleSubmit, initialValues } = props;

    return (
        <form onSubmit={handleSubmit}>

            <Field
                name="idCliente"
                component={renderHiddenField}
                type="hidden"
                placeholder={initialValues.idCliente} />

            <Field
                name="nome"
                component={renderTextField}
                label="Nome do Cliente:"
                type="text"
                placeholder={initialValues.nome} />

            <Field
                name="email"
                component={renderTextField}
                label="Endereço de Email:"
                type="email"
                placeholder={initialValues.email} />

            <input type="submit"
                value="Atualizar Cliente"
                className="btn btn-success" />

        </form>
    )
}

//registrando como um redux-form
export default connect(mapStateToProps)
(reduxForm({
    form : 'FormEdicao',
    validate,
    enableReinitialize : true
})(FormEdicao))