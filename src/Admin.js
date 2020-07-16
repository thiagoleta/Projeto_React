import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import Cookies from 'universal-cookie';

//componentes..
import CadastroCliente from './components/clientes/CadastroCliente';
import ConsultaCliente from './components/clientes/ConsultaCliente';

class Admin extends Component {

  //construtor..
  constructor(props) { //declaração do construtor
    super(props); //executando o construtor da superclasse

    //declarando as variáveis da classe..
    this.state = {
      isAuthenticated: false,
      nomeUsuario : "",
      emailUsuario: ""
    };
  }

  //função executada sempre que o componente for renderizado
  componentWillMount() {

    //verificando se o cookie de autenticação existe..
    const cookies = new Cookies();
    //verificando se o usuário não está autenticado
    if (cookies.get('access_token') == null) {
      window.location.href = '/';
    }
    else{

      const usuario = cookies.get('usuario_auth');

      this.setState(
        { 
          isAuthenticated : true,
          nomeUsuario : usuario.nome,
          emailUsuario : usuario.email
        });
    }

  }

  //função para realizar o logout do usuário
  logout = () => {

    if (window.confirm('Deseja realmente sair do sistema?')) {

      //destruindo o cookie de autenticação
      const cookies = new Cookies();
      cookies.remove('access_token');
      cookies.remove('usuario_auth');

      window.location.href = "/";

    }
  }

  //função que renderiza o conteudo do componente
  render() {
    return (

      <HashRouter>

        {
          this.state.isAuthenticated ?
            <div>

              <div id="wrapper">

                <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

                  <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon rotate-n-15">
                      <i className="fas fa-laugh-wink"></i>
                    </div>
                    <div className="sidebar-brand-text mx-3">SISTEMA</div>
                  </a>

                  <hr className="sidebar-divider my-0" />

                  <li className="nav-item">
                    <a className="nav-link" href="/admin">
                      <i className="fas fa-fw fa-tachometer-alt"></i>
                      <span>Página inicial</span></a>
                  </li>

                  <hr className="sidebar-divider" />

                  <div className="sidebar-heading">
                    Menu de Opções
         </div>

                  <li className="nav-item">
                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                      <i className="fas fa-fw fa-cog"></i>
                      <span>Gerenciar Clientes</span>
                    </a>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                      <div className="bg-white py-2 collapse-inner rounded">

                        <NavLink className="collapse-item" to="/cadastro-cliente">
                          Cadastrar Clientes
                  </NavLink>

                        <NavLink className="collapse-item" to="/consulta-cliente">
                          Consultar Clientes
                  </NavLink>

                      </div>
                    </div>
                  </li>

                </ul>

                <div id="content-wrapper" className="d-flex flex-column">

                  <div id="content">

                    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                      <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                        <i className="fa fa-bars"></i>
                      </button>

                      <ul className="navbar-nav ml-auto">
                        <li className="nav-item dropdown no-arrow">
                          <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span className="mr-2 d-none d-lg-inline text-gray-600 small"><strong>{this.state.nomeUsuario}</strong><br/>({this.state.emailUsuario})</span>
                          </a>
                          <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                            <a className="dropdown-item" href="#">
                              <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                Minha Conta
              </a>
                            <div className="dropdown-divider"></div>
                            <a onClick={() => this.logout()}
                              className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                              <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                          Sair do Sistema
                      </a>
                          </div>
                        </li>
                      </ul>

                    </nav>

                    <div className="container-fluid">

                      <Route path="/cadastro-cliente" component={CadastroCliente} />
                      <Route path="/consulta-cliente" component={ConsultaCliente} />

                    </div>

                  </div>

                  <footer className="sticky-footer bg-white">
                    <div className="container my-auto">
                      <div className="copyright text-center my-auto">
                        <span>Copyright © COTI Informática 2020</span>
                      </div>
                    </div>
                  </footer>

                </div>

              </div>

            </div> :
            <div></div>
        }

      </HashRouter>
    )
  }

}

export default Admin;