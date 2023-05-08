// styles
import './itemListContainer.css';

// fontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

// componentes
import ItemList from './ItemList'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

// import { mostrarProductos } from '../../helpers/mostrarProductos'


// firebase
import { getFirestore} from '../../firebase/config'


// spiner
import ClipLoader from "react-spinners/ClipLoader";

const ItemListContainer = (props) => {

  let {categoria} = useParams ();

  const navigate = useNavigate() 

  // console.log(categoria)

  const [listaProductos, setListaProductos] = useState ([])

  const [loading, setLoading] = useState (false)


  useEffect(() => {
    setLoading(true)

    const db = getFirestore();
    const productosDB = db.collection('productos')  //método collection de firebase

    if(categoria) { 
      const filtrado = productosDB.where("categoria", "==", categoria)
      filtrado.get()
      .then ((res) => { 
        const item = res.docs.map((doc)=> { 
          return {id: doc.id, ... doc.data()}
        })
        setListaProductos(item)
      })
      .catch((err => console.log(err)))
      .finally(() => { 
        setLoading(false)
      })
    } else {
    productosDB.get()
      .then((res=> {
        const todos = res.docs.map((doc => {
          return {id: doc.id, ...doc.data()}
        }))
        setListaProductos(todos)
      }))
      .catch(err => console.log(err))
      .finally(() => { 
        setLoading(false)
      })
    }
}, [categoria]);

const atras = () => { 
  navigate(-1)
}



  // base de datos mock
  // useEffect (()=> { 
  //   setLoading(true)
  //   mostrarProductos()
  //     .then((res) => { 
  //       if (categoria !== 'todos') { 
  //         const productosCategoria = res.filter((productos) => productos.categoria == categoria)
  //         setListaProductos(productosCategoria)
  //       } else { 
  //         setListaProductos(res)
  //       }
  //     })
  //     .catch((error)=> console.log(error))
  //     .finally(()=>[setLoading(false)])
  // },[categoria])


  return (
    <>
    {loading ? <div className='spiner'> 
      <ClipLoader
        color={'#a4e6a1'} />
      <h4>Cargando productos</h4>
      </div>
        : 
      <div>
        {categoria ? <h2>{categoria}</h2>
        :<h2>{props.greeting}</h2>
      }
        <ItemList listaProductos = {listaProductos} />
      </div>
    }
    <button className='arrowLeft' onClick={atras}> 
       <FontAwesomeIcon icon={faArrowLeft} />
    </button>
    </>
  )
}

export default ItemListContainer