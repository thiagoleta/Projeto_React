import axios from 'axios';
import Cookies from 'universal-cookie';

/*
    Arquivo utilizado para realizar as chamadas na API..
*/

//endereço ENDPOINT da API
const apiLoginUrl = "http://cotireact2020-001-site1.ctempurl.com/api/Login"; 
const apiUsuarioUrl = "http://cotireact2020-001-site1.ctempurl.com/api/Usuario"; 

//função para executar um REQUEST POST (autenticar o usuario)
export const postLogin = (data) => {
    return axios.post(apiLoginUrl, data) //POST REQUEST
        .then(response => { return response; }) //PROMISSE SUCCESS
        .catch(e => { return e; }); //PROMISSE ERROR
}

//função para executar um REQUEST POST (cadastrar o usuario)
export const postCadastro = (data) => {
    return axios.post(apiUsuarioUrl, data) //POST REQUEST
        .then(response => { return response; }) //PROMISSE SUCCESS
        .catch(e => { return e; }); //PROMISSE ERROR
}

//função para executar um REQUEST GET (consultar o usuario)
export const getUsuario = (token) => {
    return axios.get(apiUsuarioUrl, 
        { headers : { 'Authorization' : 'Bearer ' + token }}) //POST REQUEST
        .then(response => { return response; }) //PROMISSE SUCCESS
        .catch(e => { return e; }); //PROMISSE ERROR
}