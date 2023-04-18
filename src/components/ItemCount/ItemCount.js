// styles
import './itemCount.css'

import { useState } from "react"

const ItemCount = ({stock}) => {

    const initial = 1
  
    const [counter, setCounter] = useState (initial)

    const handleAdd = () => { 
        if (stock > counter) { 
            setCounter (counter + 1)
        }
    }
  
    const handleRemove = () => {
        if (counter > 0) { 
            setCounter (counter - 1)
        }
    }

    const handleReset = () => { 
        setCounter(0)
    }

    return (
    <div className='item_counter'>
        <div className="container_counter">
            <button onClick={handleRemove}> - </button>
            <p>Cantidad: {counter}</p> 
            <button onClick={handleAdd}> + </button>
        </div>
        <button className='btn_reset' onClick={handleReset}> Vaciar Carrito </button>
    </div>
  )
}

export default ItemCount