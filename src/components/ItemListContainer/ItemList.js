// componentes
import Item from "./Item";

const ItemList = ({listaProductos}) => {

 
  return (
    <>
      <div className="grid-container"> 
        {listaProductos.map((producto) => ( 
         <Item 
            key={producto.id} 
            producto={producto} 
        />
      ))}
      </div>
    </>
  );
};

export default ItemList;