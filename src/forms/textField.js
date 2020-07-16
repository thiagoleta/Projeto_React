import React from 'react';

/*
    Componente para renderizar campos de texto 
    nos formulários criados com o Redux-Form
*/

export const renderTextField = ({
    //parametros de entrada do componente
    input, label, type, placeholder, meta : { touched, error }
}) => (
    <div className="form-group">
        
        <label>{label}</label>

        <input type={type} {...input}
            autoComplete="Off"
            className="form-control"
            placeholder={placeholder}/>

        <span className="text-danger">
            {
                touched && (error && <span>{error}</span>)
            }
        </span>

    </div>
);