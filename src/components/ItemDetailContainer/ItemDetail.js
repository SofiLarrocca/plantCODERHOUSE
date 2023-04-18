// componentes
import ItemCount from '../ItemCount/ItemCount'

// style
import './itemDetail.css'

const ItemDetail = ({nombre, categoria, precio, img, stock}) => {


  return (
    <div className='card-detail'>
      <h3 className="detail-titulo">{nombre}</h3>
      <div className="detail">
        <img src={`${process.env.PUBLIC_URL}/productos/${img}`} className="img-detail" alt={"prod"} />
        <div>
          <h3 className='detail-categoria'>Planta de {categoria}</h3>
          <h3 className='detail-price'>$ {precio}</h3>
          <p>Stock: {stock}</p>
          <ItemCount stock={stock}/>
          <button 
            className='btn-detail'>
            Agregar al carrito
          </button>
        </div> 
      </div>
    </div>
  )
}

export default ItemDetail