export const validate = values =>{

    const errors = {};

    if(!values.nome){
        errors.nome = "Informe o nome do usuário.";
    }

    if(!values.email){
        errors.email = "Informe o email de acesso.";
    }

    if(!values.senha){
        errors.senha = "Informe a senha de acesso.";
    }

    if(!values.senhaConfirmacao){
        errors.senhaConfirmacao = "Confirme sua senha de acesso.";
    }

    if(values.senha != values.senhaConfirmacao){
        errors.senhaConfirmacao = "Senhas não conferem.";
    }

    return errors;
}