import React, { useEffect } from "react";
import PropTypes from 'prop-types'
import { useState } from "react";
import { useEffect } from "react";


const getGift = async( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search/tags?api_key=WkQFOUPuewhrmtUpLoiwZAFFKzKoCiAJ&q=${category}&limit=25&offset=0`;
    const resp = await fetch(url);
    const gifts = data.map( img => {
        return {
            id:img.id,
            title: img.title,
            url: img.imagesdownside_medium.url
        }
    })
}

export  const GiftGrid = ({category}) => {

    useEffect(()=> {
        console.log( category );
    },[])

    return(
        <>
            <h3>{ category }</h3>
            <p>Hola</p>
        </>
    )
}