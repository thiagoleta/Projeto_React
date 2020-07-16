
import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login';
import Admin from './Admin';
import Register from './Register';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//importando react-redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

//importando o redux-form
import { reducer as formReducer } from 'redux-form';

//importando o saga
import createSagaMiddleware from 'redux-saga';

//importando os reducers e os sagas..
import clienteReducer from './reducers/clienteReducer';
import usuarioReducer from './reducers/usuarioReducer';
import clienteSaga from './sagas/clienteSaga';
import usuarioSaga from './sagas/usuarioSaga';

//criando o saga..
const sagaMiddleware = createSagaMiddleware();

//criando a store (registrando os reducers)
const rootReducer = combineReducers({
  cliente : clienteReducer, //registrando o clienteReducer
  usuario : usuarioReducer, //registrando o usuarioReducer
  form : formReducer //registrando o redux-form
});

const store = createStore(
  rootReducer, 
  applyMiddleware(sagaMiddleware)
);

//executar o clienteSaga..
sagaMiddleware.run(clienteSaga);
//executar o usuarioSaga..
sagaMiddleware.run(usuarioSaga);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={Login}/>
          <Route path="/admin" component={Admin}/>
          <Route path="/register" component={Register}/>
        </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
