import { useContext, useState } from "react"
import { CartContext } from "../Context/CartContext"
import { useNavigate } from 'react-router-dom'


// styles
import './cartView.css'
import { Link } from "react-router-dom"

// fontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const CartView = () => {

    // cartContext  
    const {precioTotal, removeItem, vaciarCarrito, carrito} = useContext(CartContext)



    // Navigate
    const navigate = useNavigate() 

    const atras = () => { 
        navigate(-1)
      }



    return (
    <div className="cartView_container">

        
        {carrito.length === 0 ? 
            <div>
                <h3> Tu carrito está vacío</h3>
                <Link to='/'>Comprar</Link>
            </div>    
        : 
        (
        <>
        <p>Tus productos:</p>
        <table className="table_cartView">
                <tr>
                    <th></th>
                    <th>Cantidad</th>
                    <th>Producto</th>
                    <th>Precio Unitario</th>
                    <th>Precio Total</th>
                    <th></th>
                </tr>

        {carrito.map ((item => (
                <tr className="itemCart_container">
                    <td><img src={item.img} alt={item.nombre} width='80px'/></td>
                    <td>{item.counter}</td>
                    <td>{item.nombre}</td>
                    <td>$ {item.precio}</td>
                    <td>$ {item.counter * item.precio}</td>
                    <td>
                        <FontAwesomeIcon className="trash" onClick={() => removeItem(item.id)}icon={faTrash} />
                    </td>
                    </tr>
        )))}
        </table>
        <p className="precioTotal">Precio Total: $ {precioTotal()}</p>


        <div className="container_btn">
            <button 
                className="btn_checkout"
                onClick={vaciarCarrito}> Vaciar Carrito
               </button>
            <Link to='/checkout'>
                <button className="btn_checkout">
                    Finalizar Compra
                </button>
            </Link>
        </div>
        </>
        )}
        <button className='arrowLeft' onClick={atras}> 
            <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        
    </div>
    
  )
}

export default CartView