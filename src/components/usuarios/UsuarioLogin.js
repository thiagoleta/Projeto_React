import React from 'react';
import FormLogin from './forms/FormLogin';
import { connect } from 'react-redux';
import * as actions from '../../actions/usuarioActions';

const mapStateToProps = state => {
    return {
        mensagem: state.usuario.mensagemErro
    }
}

class UsuarioLogin extends React.Component{

    //função para executar o SUBMIT do formulário
    autenticarUsuario = (values) => {
        
        //disparando uma ACTION
        this.props.dispatch({
            type: actions.AUTENTICAR_USUARIO,
            data: values /* JSON contendo os valores dos campos */
        });

    }

    render(){
        return(
            <div>
                <FormLogin onSubmit={this.autenticarUsuario}/>

                <div className="text-white">
                    <strong>{this.props.mensagem}</strong>
                </div>

            </div>
        )
    }
}

export default connect(mapStateToProps)(UsuarioLogin);