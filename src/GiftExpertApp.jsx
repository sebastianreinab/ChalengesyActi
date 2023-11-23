import React from "react";
import PropTypes from 'prop-types'
import { useState } from "react";

export const GiftExpertApp = () => {   
    
const [categories,setCategories] = useState(['FirstCategory']);
const [category,setCategory] = useState('');

const onAddCategory = () => {
    setCategories(list => [...list,category])
    setCategory('')
}

const onSetCategory = (evt) => {
    setCategory(evt.target.value)
}
    
    return (
        <>
            <h1>GiftExpert</h1>
            <input type="text"value={category}
                onChange={(event)=> onSetCategory(event)}/>
            <button onClick={()=> onAddCategory()}>Add category</button>
            <ol>
                {
                    categories.map(
                        (category, key) =>
                        {
                            return<li key={ key }>{ category }</li>
                        }
                    )
                }
            </ol>
        </>
    )
}