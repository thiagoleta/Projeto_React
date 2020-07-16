import * as actions from '../actions/usuarioActions';
import Cookies from 'universal-cookie';

const initialState = {
    mensagemSucesso: "",
    mensagemErro: ""
}

const usuarioReducer = (state = initialState, action) => {

    switch (action.type) {

        case actions.SUCESSO_AUTENTICACAO:
         
            const result = action.data.result;
            const usuario = action.data.usuario;

            const token = result.data.token;

            //gravar o token de autenticação em um arquivo de COOKIES
            const cookies = new Cookies();
            cookies.set('access_token', token);
            cookies.set('usuario_auth', usuario.data);

            //redirecionamento..
            window.location.href = "/admin";

            return state;

        case actions.ERRO_AUTENTICACAO:
            return {
                ...state,
                mensagemErro: "Acesso Negado."
            };

        case actions.SUCESSO_CADASTRO:
            
            const resultCadastro = action.data;

            return {
                ...state,
                mensagemSucesso : resultCadastro.data.mensagem
            }

        case actions.ERRO_CADASTRO:
            console.log(action.data);
            return state;

        default:
            return state;
    }

}

export default usuarioReducer;