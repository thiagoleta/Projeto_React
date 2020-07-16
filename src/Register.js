import React, { Component } from 'react';
import UsuarioRegister from './components/usuarios/UsuarioRegister';

class Register extends Component {

  render() {

    const pageStyle = {
      height: '800px'
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
                          <h1 className="h4 text-gray-900 mb-4">Criar Conta de Usuário</h1>
                          <hr/>
                        </div>

                        <UsuarioRegister/>
                        <hr/>

                        <div className="text-center">
                            <a href="/">
                                Voltar para o formulário de login.
                            </a>
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

export default Register;