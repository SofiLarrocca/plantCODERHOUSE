// styles
import './cardWidget.css'

// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

// cartContext
import { useContext } from "react";
import { CartContext } from '../Context/CartContext'

// componentes
import { Link } from "react-router-dom";



const CardWidgt = () => {
  
// consumir datos del contexto CartContext
  const {cantidadTotal} = useContext(CartContext)
  
  return (
    <Link to='/carrito'>
      <div className="container_cardWidget">
          <FontAwesomeIcon icon={faCartShopping} />
          <p>{cantidadTotal()}</p>
      </div>
    </Link>
  )
}

export default CardWidgt