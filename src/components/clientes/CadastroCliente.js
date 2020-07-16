import React, { Component } from 'react';
import { connect } from 'react-redux';
import FormCadastro from './forms/FormCadastro';
import { CADASTRAR_CLIENTE } from '../../actions/clienteActions';

//função para escutar as transformações feitas pelo reducer
const mapStateToProps = state => {
    return {
        mensagem: state.cliente.mensagemCadastro
    }
}

class CadastroCliente extends Component {

    //função para processar o SUBMIT do formulário
    cadastrarCliente = (values) => {

        //disparando uma ACTION
        this.props.dispatch({
            type: CADASTRAR_CLIENTE,
            data: values /* JSON contendo os valores dos campos */
        });
    }

    //função que exibe o conteudo HTML do componente..
    render() {
        return (
            <div>
                <h1 className="h3 mb-2 text-gray-800">Cadastro de Clientes</h1>
                <p className="mb-4">Preencha o formulário abaixo para cadastrar um novo cliente.</p>

                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Formulário de Cadastro</h6>
                    </div>
                    <div className="card-body">

                        {
                            this.props.mensagem.length > 0 ?
                                <div className="alert alert-success alert-dismissible fade show" role="alert">
                                    <strong>{this.props.mensagem}</strong>
                                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                : <div></div>
                        }

                        <div className="row">
                            <div className="col-md-6">

                                <FormCadastro
                                    onSubmit={this.cadastrarCliente}
                                />

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

//conectando o componente no REDUX
export default connect(mapStateToProps)(CadastroCliente);