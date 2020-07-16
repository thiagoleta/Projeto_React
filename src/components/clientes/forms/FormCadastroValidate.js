/*
    Arquivo de validação para o formulário de cadastro de cliente
    values -> recebe os campos do formulário ('name' de cada campo)
*/

export const validate = values =>{

    //objeto para armazenar os erros de validação
    const errors = {}; //vazio

    //nome -> campo obrigatório
    if(!values.nome){
        errors.nome = "Por favor, informe o nome do cliente.";
    }

    //email -> campo obrigatório
    if(!values.email){
        errors.email = "Por favor, informe o email do cliente.";
    }

    //retornando o objeto com os erros
    return errors;
}