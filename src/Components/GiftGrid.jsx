import React from "react";
import PropTypes from 'prop-types'
import { useState } from "react";
import { useEffect } from "react";
import { GiftItem } from "./GiftItem";


const getGift = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search/tags?api_key=WkQFOUPuewhrmtUpLoiwZAFFKzKoCiAJ&q=${category}&limit=25&offset=0`;
    
    const resp = await fetch(url);
    const { data } = await resp.json()
    const gifs = data.map( img => {

        return {
            id:img.id,
            title: img.title,
            url: img.url
        }
    })

    return gifs
}

export  const GiftGrid = ({category}) => {

    /*getGift(category)

    return(
        <>
            <h3>{ category }</h3>
            <p>Hola</p>
        </>
    )*/
    const [images, setImages] = useState([]);

    const getImages = async ()=> {

        const images = await getGift( category )
        setImages( images );
    }

    useEffect( () => {
        getImages();
    },[])

    return(
        <>
            <h3>{category}</h3>
            <div className="card-grid">
                {
                    images.map((image, key) => {
                        return <GiftItem key={key} {...image}></GiftItem>
                    })
                }
            </div>
        </>
    )
}