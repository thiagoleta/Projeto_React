import * as actions from '../actions/clienteActions';
import * as services from '../services/clienteService';

import { all, put, takeEvery, call } from 'redux-saga/effects';

/*
    Arquivo utilizado para executar os serviços da API
    de forma assíncrona (THREADS) e ouvindo e disparando 
    ACTIONS no projeto
*/

//função para executar o cadastro do cliente na API..
function* cadastrarCliente(action){
    
    //executando o serviço POST da API
    try{
        const result = yield call(services.post, action.data);
        yield put({ type : actions.SUCESSO_CADASTRO_CLIENTE, data : result });
    }
    catch(e){
        yield put({ type : actions.ERRO_CLIENTE })
    }
}

//função para executar a consulta de clientes na API..
function* consultarClientes(action){
    
    //executando o serviço GET da API
    try{
        const result = yield call(services.getByData, action.data);
        yield put({ type : actions.SUCESSO_CONSULTA_CLIENTE, data : result });
    }
    catch(e){
        yield put({ type : actions.ERRO_CLIENTE })
    }
}

//função para excluir um cliente
function* excluirCliente(action){
    if(window.confirm('Deseja realmente excluir o cliente?')){

        try{
            yield call(services.remove, action.id);
            yield put({ type : actions.SUCESSO_EXCLUSAO_CLIENTE, id: action.id })
        }
        catch(e){
            yield put({ type : actions.ERRO_CLIENTE })
        }

    }
}

function* atualizarCliente(action){

    try{
        const result = yield call(services.put, action.data);
        yield put({ type : actions.SUCESSO_ATUALIZACAO_CLIENTE, data: result });
    }
    catch(e){
        yield put({ type : actions.ERRO_CLIENTE });
    }
}

//função watcher -> escutando as actions do projeto..
function* watcher(){ //interceptador!
    
    //capturando as ACTIONS e executar funções do saga
    yield takeEvery(actions.CADASTRAR_CLIENTE, cadastrarCliente);
    yield takeEvery(actions.CONSULTAR_CLIENTES, consultarClientes);
    yield takeEvery(actions.EXCLUIR_CLIENTE, excluirCliente);
    yield takeEvery(actions.ATUALIZAR_CLIENTE, atualizarCliente);
}

//registrando o saga..
export default function* clienteSaga(){
    yield all([ watcher() ]);
}