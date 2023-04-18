// styles
import './itemListContainer.css';

// componentes
import ItemList from './ItemList'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { mostrarProductos } from '../../helpers/mostrarProductos'

// spiner
import ClipLoader from "react-spinners/ClipLoader";

const ItemListContainer = (props) => {

  let {categoria} = useParams ();

  // console.log(categoria)

  const [listaProductos, setListaProductos] = useState ([])

  const [loading, setLoading] = useState (false)


  useEffect (()=> { 
    setLoading(true)
    mostrarProductos()
      .then((res) => { 
        if (categoria !== 'todos') { 
          const productosCategoria = res.filter((productos) => productos.categoria == categoria)
          setListaProductos(productosCategoria)
        } else { 
          setListaProductos(res)
        }
      })
      .catch((error)=> console.log(error))
      .finally(()=>[setLoading(false)])
  },[categoria])


  return (
    <>
    {loading ? <div className='spiner'> 
      <ClipLoader
        color={'#a4e6a1'} />
      <h4>Cargando productos</h4>
      </div>
        : 
      <div>
        <h2>{props.greeting}</h2>
        <ItemList listaProductos = {listaProductos} />
      </div>
    }
    </>
  )
}

export default ItemListContainer