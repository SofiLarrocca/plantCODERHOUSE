// styles
import './itemCount.css'

// cartContext
import { useContext } from "react"
import { CartContext } from "../Context/CartContext"

// useState
import { useState } from "react"


const ItemCount = ({stock, counter, setCounter}) => {

    // cartContext
    const {handleAdd, handleRemove, mensaje} = useContext(CartContext)

    // console.log(mensaje)

    return (
    <div className='item_counter'>
        <p className='mensaje_stock'>{mensaje}</p>
        <div className="container_counter">
            <button onClick={() => handleRemove(counter, setCounter)}> - </button>
            <p>Cantidad: {counter}</p> 
            <button onClick={() => handleAdd(stock, counter, setCounter)}> + </button>
        </div>
    </div>
  )
}

export default ItemCount