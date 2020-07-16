
import React, { Component } from 'react';
import UsuarioLogin from './components/usuarios/UsuarioLogin';

class Login extends Component {

  render() {

    const pageStyle = {
      height: '900px'
    }

    return (

      <div className="bg-gradient-primary" style={pageStyle}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card o-hidden border-0 shadow-lg my-5">
                <div className="card-body p-0">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="p-5">
                        <div className="text-center">
                          <h1 className="h4 text-gray-900 mb-4">Acesso ao Sistema</h1>
                          <hr/>
                        </div>

                        <UsuarioLogin/>

                        <hr/>

                        <div className="text-center">
                          <a href="/register">Criar conta de usuário</a>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;