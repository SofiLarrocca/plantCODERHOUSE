// styles
import '../../style/App.css'
import './home.css';

// img
import palmera from '../../img/palmera_fondo.png'
import plantaFondo from '../../img/planta_fondo.png'


// react-router-dom
import { Link} from 'react-router-dom';

const Home = () => {
  return (
    <div className='container_navbar'>
        <img className='img_palmera' src={palmera} alt='palmera'/>
        <img className='img_planta' src={plantaFondo} alt='planta'/>

        <div className='container_text'>
          <h2 className='title'>Plant.</h2>
          <p>Encontrarás plantas para tu hogar, patio u oficina. También podrás encontrar accesorios de jardinería</p>

          <Link  to= '/productos/todos' className='getStart'> Ir a tienda</Link>
      </div>

        </div>
  )
}

export default Home