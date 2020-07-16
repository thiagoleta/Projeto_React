import React from 'react';
import FormRegister from './forms/FormRegister';
import { connect } from 'react-redux';
import * as actions from '../../actions/usuarioActions';

const mapStateToProps = state => {
    return {
        mensagem: state.usuario.mensagemSucesso
    }
}

class UsuarioRegister extends React.Component {

    cadastrarUsuario = (values) => {

        //disparando uma ACTION
        this.props.dispatch({
            type: actions.CADASTRAR_USUARIO,
            data: values /* JSON contendo os valores dos campos */
        });

    }

    render() {
        return (
            <div>
                <FormRegister onSubmit={this.cadastrarUsuario} />
                <br/>
                {
                    this.props.mensagem.length > 0 ?
                        <div className="alert alert-success alert-dismissible fade show" role="alert">
                            <strong>{this.props.mensagem}</strong>
                            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        : <div></div>
                }

            </div>
        )
    }
}

export default connect(mapStateToProps)(UsuarioRegister);