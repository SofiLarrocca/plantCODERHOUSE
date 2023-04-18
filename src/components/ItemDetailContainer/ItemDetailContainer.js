import { useParams } from 'react-router-dom'
import { mostrarProductos } from '../../helpers/mostrarProductos'
import { useEffect, useState } from 'react'

// componentes
import ItemDetail from './ItemDetail'

// spiner
import ClipLoader from "react-spinners/ClipLoader";

const ItemDetailContainer = () => {

  const [item, setItem] = useState ({})
  const [loading, setLoading] = useState (false)

 let {itemId} = useParams ()

  useEffect(()=>{
    setLoading(true)
    mostrarProductos()
      .then(res => setItem(res.find((prod =>  prod.id === Number(itemId)))))
      .catch(err => console.log(err))
      .finally(()=> { 
        setLoading(false)
      })
    },[itemId])


  return (
    <>
    {loading ? <div className='spiner'> 
      <ClipLoader
        color={'#a4e6a1'} />
        <h4>Cargando productos</h4>
      </div>
      :<ItemDetail {...item}/>
      }
  </>
  )
}

export default ItemDetailContainer