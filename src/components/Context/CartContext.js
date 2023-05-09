// from react
import { createContext, useEffect, useState } from "react";

// libreria toastify notificacion
import { toast } from 'react-toastify';


// cartContext
export const CartContext = createContext()


// localStorage
const init = JSON.parse(localStorage.getItem('carrito')) || []



export const CartProvider = ({children})=> {
    
    const [mensaje, setMensaje] = useState('')

    const [carrito, setCarrito] = useState(init)

    useEffect(()=> { 
        localStorage.setItem('carrito', JSON.stringify(carrito))
    }, [carrito])


    const addCart = (newItem, counter) => { 
        const newCart = carrito.filter((item => item.id !== newItem.id))
        newCart.push({...newItem, cantidad:counter})
        setCarrito(newCart)

        toast.success("Se agregó producto al carrito")
    }
    
    const cantidadTotal = () => { 
        return carrito.reduce((acc, prod)=> acc +prod.counter,0)
    }

    const precioTotal = () => { 
        return carrito.reduce((acc,prod)=> acc + prod.precio * prod.counter,0)
    }

    const removeItem = (itemId) => { 
        const newCart = carrito.filter((item)=> item.id !== itemId)
        setCarrito(newCart)
    }

    const vaciarCarrito = () => { 
        setCarrito([])
    }
    

    // funciones ItemCount
    const handleAdd = (stock, counter, setCounter) => { 
        if (stock > counter) { 
            setCounter (counter + 1)
        } else { 
            setMensaje('no hay stock suficiente')
            setTimeout(() => {
                setMensaje('')
            }, 3000);
        }
    }

    const handleRemove = (counter, setCounter) => {
        if (counter > 0) { 
            setCounter (counter - 1)
        }
    }

    return (
        <CartContext.Provider
        value={{
            addCart,
            cantidadTotal,
            precioTotal,
            removeItem,
            vaciarCarrito,
            handleAdd,
            handleRemove,
            carrito,
            mensaje,
          }}>
            {children}
        </CartContext.Provider>
    )
}

