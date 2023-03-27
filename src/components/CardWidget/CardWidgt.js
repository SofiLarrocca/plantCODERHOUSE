// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

// styles
import './cardWidget.css'

const CardWidgt = () => {
  return (
    <div className="container_cardWidget">
        <FontAwesomeIcon icon={faCartShopping} />
        <p>1</p>
    </div>
  )
}

export default CardWidgt