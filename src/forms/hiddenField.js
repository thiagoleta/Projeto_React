import React from 'react';

/*
    Componente para renderizar campos ocultos 
    nos formulários criados com o Redux-Form
*/

export const renderHiddenField = ({
    //parametros de entrada do componente
    input, type, meta : { touched, error }
}) => (
    <div>        
        <input type={type} {...input}/>
        <span className="text-danger">
            {
                touched && (error && <span>{error}</span>)
            }
        </span>
    </div>
);