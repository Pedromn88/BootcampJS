import React from "react"

export const ProductItem = ({data, addToCart}) => {
let{id, name, price, image} = data;
    return   (
    <div>
        <h4>{name}</h4>
        <h4>{price}</h4>
        <img src={image}></img>
        <button onClick={() => addToCart(id)}>agregar</button>

    </div>
    
    )
    
}