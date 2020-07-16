import React, { Component } from 'react';
import { connect } from 'react-redux';
import FormEdicao from './forms/FormEdicao';
import * as actions from '../../actions/clienteActions';

//função para escutar as transformações feitas pelo reducer
const mapStateToProps = state => {
    return {
        mensagem: state.cliente.mensagemEdicao
    }
}

class EdicaoCliente extends Component {

    //função para processar o SUBMIT do formulário
    atualizarCliente = (values) => {

        //executar uma action para ATUALIZAR o cliente..
        this.props.dispatch({
            type: actions.ATUALIZAR_CLIENTE,
            data: values
        });

    }

    //função que exibe o conteudo HTML do componente..
    render() {
        return (
            <div>
                <FormEdicao onSubmit={this.atualizarCliente} />
                <br/>
                {
                    this.props.mensagem.length > 0 ?                        
                        <div className="alert alert-success alert-dismissible fade show" role="alert">
                            <strong>{this.props.mensagem}</strong>
                        </div>
                        : <div></div>
                }

            </div>
        )
    }
}

//conectando o componente no REDUX
export default connect(mapStateToProps)(EdicaoCliente);