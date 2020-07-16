import React, { Component } from 'react';
import { connect } from 'react-redux';
import FormConsulta from './forms/FormConsulta';
import EdicaoCliente from './EdicaoCliente';
import * as actions from '../../actions/clienteActions';

//função para acessar os dados (state) do clienteReducer
const mapStateToProps = state => {
    return {
        //obtendo a listagem de clientes do state
        lista: state.cliente.listagemDeClientes,
        //obtendo a mensagem de sucesso de exclusão do state
        mensagemExclusao: state.cliente.mensagemExclusao
    }
}

class ConsultaCliente extends Component {

    //função para processar o SUBMIT do formulário
    consultarCliente = (values) => {

        //disparando uma ACTION
        this.props.dispatch({
            type: actions.CONSULTAR_CLIENTES,
            data: values /* JSON contendo os valores dos campos */
        })

    }

    render() {
        return (
            <div>
                <h1 className="h3 mb-2 text-gray-800">Consulta de Clientes</h1>
                <p className="mb-4">Listagem de clientes cadastrados.</p>

                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Tabela de Consulta</h6>
                    </div>
                    <div className="card-body">

                        <div className="row">
                            <div className="col-md-4">
                                <FormConsulta
                                    onSubmit={this.consultarCliente}
                                />
                            </div>
                        </div>

                        <br />

                        {
                            this.props.lista.length > 0 ?
                                <div className="row">
                                    <div className="col-md-12">

                                        <strong>{this.props.mensagemExclusao}</strong>

                                        <table id="tabela" className="table table-bordered table-hover table-stripped">
                                            <thead>
                                                <tr>
                                                    <th>Código</th>
                                                    <th>Nome do Cliente</th>
                                                    <th>Email</th>
                                                    <th>Data de Cadastro</th>
                                                    <th>Operações</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    this.props.lista.map(
                                                        (item) => (
                                                            <tr key={item.idCliente}>
                                                                <td>{item.idCliente}</td>
                                                                <td>{item.nome}</td>
                                                                <td>{item.email}</td>
                                                                <td>
                                                                    {
                                                                        new Intl.DateTimeFormat('pt-BR',
                                                                            {
                                                                                year: 'numeric',
                                                                                month: 'long',
                                                                                day: '2-digit'
                                                                            }).format(new Date(item.dataCadastro))
                                                                    }
                                                                </td>
                                                                <td>
                                                                    <button className="btn btn-primary btn-sm"
                                                                        data-target="#janelaedicao"
                                                                        data-toggle="modal"
                                                                        onClick={() => this.props.dispatch(
                                                                            {
                                                                                type: actions.EDITAR_CLIENTE,
                                                                                data: item //cliente
                                                                            }
                                                                        )}>
                                                                        Atualizar
                                                                    </button>
                                                                    <button className="btn btn-danger btn-sm ml-1"
                                                                        onClick={() => this.props.dispatch(
                                                                            {
                                                                                type: actions.EXCLUIR_CLIENTE,
                                                                                id: item.idCliente
                                                                            }
                                                                        )}>
                                                                        Excluir
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                        )
                                                    )
                                                }
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <td colSpan="5">
                                                        Quantidade de clientes: {this.props.lista.length}
                                                    </td>
                                                </tr>
                                            </tfoot>
                                        </table>

                                    </div>
                                </div> : <div></div>
                        }

                    </div>
                </div>

                <div className="modal fade" id="janelaedicao" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header bg-primary text-white">
                                <h5 className="modal-title" id="staticBackdropLabel">Atualizar dados de Cliente</h5>
                                <button type="button" className="close text-white" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <EdicaoCliente/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default connect(mapStateToProps)(ConsultaCliente);