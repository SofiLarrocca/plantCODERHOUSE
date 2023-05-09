// componentes
import { useNavigate } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'

// fontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

// libreria toastify notificacion
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// cartContext
import { CartContext } from '../Context/CartContext'

// style
import './itemDetail.css'
import { useContext, useState } from 'react'



const ItemDetail = ({id, nombre, categoria, precio, img, stock}) => {


  const navigate = useNavigate() 
  
  const atras = () => { 
    navigate(-1)
  }

  const [counter, setCounter] = useState (1) //pasar esto por props en itemCount

  const agregarCarrito = () => { 
    const newItem = {
      nombre,
      id,
      categoria, 
      img, 
      precio,
      counter,
    }
    addCart(newItem)
  }

  // consumir datos del contexto CartContext
  const {addCart} = useContext(CartContext)

  return (
    <div className='card-detail'>
      <div className='detail-container'>
        <p className='detail-categoria'>{categoria}</p>
        <h3 className="detail-titulo">{nombre}</h3>

        <div className='card-responsive'>
          <p className='detail-precio'>$ {Number(precio)}</p>
          <p className='detail-stock'>Stock: {stock}</p>
          <ItemCount 
            className= 'detal-count'
            stock={stock}
            counter={counter}
            setCounter={setCounter}
          />

          
        <button
          onClick={agregarCarrito} 
          className='btn-detail'> Agregar al carrito
          <ToastContainer
            position="bottom-right"
            autoClose={2000}
            theme="colored"/>
        </button>
       </div>


        <button className='arrowLeft' onClick={atras}> 
        <FontAwesomeIcon icon={faArrowLeft} />
        </button>
      </div>

    <img src={img} className="img-detail" alt={"prod"} />
    </div>
  )
}

export default ItemDetail

