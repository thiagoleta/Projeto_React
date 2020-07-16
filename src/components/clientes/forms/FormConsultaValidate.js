/*
    Arquivo de validação para o formulário de consulta de cliente
    values -> recebe os campos do formulário ('name' de cada campo)
*/

export const validate = values =>{

    //objeto para armazenar os erros de validação
    const errors = {}; //vazio

    //dataMin -> campo obrigatório
    if(!values.dataMin){
        errors.dataMin = "Por favor, informe a data início.";
    }

    //dataMax -> campo obrigatório
    if(!values.dataMax){
        errors.dataMax = "Por favor, informe a data fim.";
    }

    //retornando o objeto com os erros
    return errors;
}