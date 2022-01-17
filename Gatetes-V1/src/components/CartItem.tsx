import React from "react"

export const CartItem = ( { data, delFromCart }) =>{
    let{ id, name, price, quantity, image} = data;


    return (
        <>
        <h3> {name}</h3>
        <h5>{price}</h5>
        <img src={image}></img>
        <button onClick={() => delFromCart(id)}>Eliminar Uno</button>
        <button onClick={() => delFromCart(id, true)}>Eliminar Todos</button>
        </>
    )
}