import React from "react";
import PropTypes from 'prop-types';
import { useState } from "react";

export const FirstApp = ({value = 0}) => {

    const [counter,setCounter] = useState(value)

    const handleAdd =()=> {
        setCounter(counter + 1)
    }

    const handleResta =()=> {
        setCounter(counter - 1 )
    }

    const handlePrincipio =()=> {
        setCounter(value)
    }

    return(
        <>
            <h1> Counter </h1>
            <span> {counter} </span>
            <button onClick={() => handleAdd()}> +1 </button>
            <button onClick={() => handleResta()}> -1 </button>
            <button onClick={() => handlePrincipio()}> Principio </button>
        </>
    )
}