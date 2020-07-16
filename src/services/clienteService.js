import axios from 'axios';
import Cookies from 'universal-cookie';

/*
    Arquivo utilizado para realizar as chamadas na API..
*/

//endereço ENDPOINT da API
const apiUrl = "http://cotireact2020-001-site1.ctempurl.com/api/Cliente"; 

//função para obter o token e retornar o header da requisição
const authorization = () => {

    //buscando o conteudo do cookie (access_token)
    const cookies = new Cookies();
    const token = cookies.get('access_token');

    //retornando o conteudo que será enviado no HEADER das requisições
    return { 'Authorization' : 'Bearer ' + token };
}

//função para executar um REQUEST POST
export const post = (data) => {
    return axios.post(apiUrl, data, 
        { headers : authorization() }) //POST REQUEST
        .then(response => { return response; }) //PROMISSE SUCCESS
        .catch(e => { return e; }); //PROMISSE ERROR
}

//função para executar um REQUEST PUT
export const put = (data) => {
    return axios.put(apiUrl, data, 
        { headers : authorization() }) //PUT REQUEST
        .then(response => { return response; }) //PROMISSE SUCCESS
        .catch(e => { return e; }); //PROMISSE ERROR
}

//função para executar um REQUEST DELETE
export const remove = (id) => {
    return axios.delete(apiUrl + "/" + id, 
        { headers : authorization() }) //DELETE REQUEST
        .then(response => { return response; }) //PROMISSE SUCCESS
        .catch(e => { return e; }); //PROMISSE ERROR
}

//função para executar um REQUEST GET
export const getByData = (values) => {
    return axios.get(apiUrl + "/" + values.dataMin + "/" + values.dataMax, 
        { headers : authorization() }) //GET REQUEST
        .then(response => { return response; }) //PROMISSE SUCCESS
        .catch(e => { return e; }); //PROMISSE ERROR
}

//função para executar um REQUEST GET
export const getById = (id) => {
    return axios.get(apiUrl + "/" + id, 
        { headers : authorization() }) //GET REQUEST
        .then(response => { return response; }) //PROMISSE SUCCESS
        .catch(e => { return e; }); //PROMISSE ERROR
}
