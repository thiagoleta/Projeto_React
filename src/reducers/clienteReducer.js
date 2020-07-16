import * as actions from '../actions/clienteActions';

/*
    Arquivo REDUCER para processar as ACTIONS de cliente
*/

//objeto para armazenar os dados do state referente
//a este reducer -> clienteReducer.js
const initialState = {
    mensagemCadastro: '', //texto
    mensagemExclusao: '', //texto
    mensagemEdicao: '', //texto
    clienteEdicao: {
        idCliente : 0,
        nome : '',
        email : ''
    },
    listagemDeClientes: [] //array
}

//declarando o reducer..
const clienteReducer = (state = initialState, action) => {
    switch (action.type) { //type -> nome de atributo padrão..

        case actions.SUCESSO_CADASTRO_CLIENTE:
            //capturando o retorno devolvido pelo Saga..
            const resultCadastro = action.data;
            return {
                ...state,
                mensagemCadastro: resultCadastro.data.mensagem
            };

        case actions.SUCESSO_CONSULTA_CLIENTE:
            //capturando o retorno devolvido pelo Saga..
            const resultConsulta = action.data;
            return {
                ...state,
                listagemDeClientes: resultConsulta.data
            };

        case actions.SUCESSO_EXCLUSAO_CLIENTE:
                
                //retirando o cliente excluido da lista..
                const listagem = state.listagemDeClientes
                        .filter((item) => item.idCliente !== action.id);

                return {
                    ...state,                    
                    listagemDeClientes : listagem,
                    //exibindo mensagem de sucesso na exclusão
                    mensagemExclusao : "Cliente excluído com sucesso."
                }

        case actions.EDITAR_CLIENTE:            
            return {
              ...state,
              mensagemEdicao : '',
              clienteEdicao : action.data  
            };

        case actions.SUCESSO_ATUALIZACAO_CLIENTE:
            return {
                ...state,
                mensagemEdicao : 'Cliente atualizado com sucesso.'
            }

        default:
            return state;
    }
}

export default clienteReducer;