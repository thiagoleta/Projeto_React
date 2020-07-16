import * as actions from '../actions/usuarioActions';
import * as services from '../services/usuarioService';

import { all, put, takeEvery, call } from 'redux-saga/effects';

function* autenticarUsuario(action){
    
    try{
        const result = yield call(services.postLogin, action.data);  
        const usuario = yield call(services.getUsuario, result.data.token);

        yield put({ type : actions.SUCESSO_AUTENTICACAO, 
            data : { result, usuario } });
    }
    catch(e){        
        yield put({ type : actions.ERRO_AUTENTICACAO })
    }
}

function* cadastrarUsuario(action){
    
    try{
        const result = yield call(services.postCadastro, action.data);  

        const response = JSON.stringify(result);
        console.log(JSON.parse(response));

        yield put({ type : actions.SUCESSO_CADASTRO, data : result });
    }
    catch(e){        
        yield put({ type : actions.ERRO_CADASTRO })
    }
}

function* watcher(){ //interceptador!    
    yield takeEvery(actions.AUTENTICAR_USUARIO, autenticarUsuario);
    yield takeEvery(actions.CADASTRAR_USUARIO, cadastrarUsuario);
}

//registrando o saga..
export default function* usuarioSaga(){
    yield all([ watcher() ]);
}