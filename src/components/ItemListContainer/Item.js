import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";


const Item = ({producto}) => {
  
  return (
    <div className="card-container">
      <h3 className="card-titulo">{producto.nombre}</h3>
      <img src={`${process.env.PUBLIC_URL}/productos/${producto.img}`} className="img-prod" alt={"prod"} />
      <div className="card-detalle">
        <h3 className='card-price'>$ {producto.precio}</h3>
        <h3 className='card-categoria'>Planta de {producto.categoria}</h3>
        
        <Link to = {`/detalle/${producto.id}`}>
        <button 
          className="card-button">Ver Más</button>
        </Link>
      </div>
    </div>
  );
};

export default Item;

