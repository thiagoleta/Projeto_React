export const validate = values =>{

    const errors = {};

    if(!values.email){
        errors.email = "Informe o email de acesso.";
    }

    if(!values.senha){
        errors.senha = "Informe a senha de acesso.";
    }

    return errors;
}