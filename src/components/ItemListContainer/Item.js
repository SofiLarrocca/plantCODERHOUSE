// import { useParams, useState } from "react-router-dom";
// import { getStorage, ref, getDownloadURL } from "firebase/storage";

import { Link } from "react-router-dom";


const Item = ({producto}) => {

  // const [imgURL, setImgURL] = useState(null);

  // const storage = getStorage();

  // getDownloadURL(ref(storage, producto.img))
  //   .then(setImgURL)
  //   .catch((error) => console.log("error:", error));
  
  return (
    <div className="card-container">
      <h3 className="card-titulo">{producto.nombre}</h3>
      <img src={producto.img} className="img-prod" alt={"prod"} />
      <div className="card-detalle">
        <h3 className='card-categoria'>{producto.categoria}</h3>
        <h3 className='card-price'>$ {producto.precio}</h3>
        
        <Link to = {`/detalle/${producto.id}`}>
        <button 
          className="card-button">Ver Más</button>
        </Link>
      </div>
    </div>
  );
};

export default Item;

