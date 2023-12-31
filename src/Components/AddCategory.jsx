import React from "react";
import { useState } from "react";

export const AddCategory = ({onAddCategory}) => {
    const [inputValue, setInputValue] = useState('...');
    
    const onInputValue = (evt) => {
        setInputValue(evt.target.value)
    }

    const onSubmit = (evt) => {
        evt.preventDefault();
        onAddCategory( inputValue );
        setInputValue('');
    }

    return(
        <>
            <form onSubmit={(event) => onSubmit(event)}>
                <input 
                    type="text"
                    placeholder="Buscar"
                    value={ inputValue }
                    onChange={(event) => onInputValue(event)}
                />
            </form>
        </>
    )
}