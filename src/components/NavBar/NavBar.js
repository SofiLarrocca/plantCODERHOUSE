// componntes
import CardWidgt from '../CardWidget/CardWidgt';

// styles
import '../../style/App.css'
import './nav.css';

// img
import palmera from '../../img/palmera_fondo.png'
import plantaFondo from '../../img/planta_fondo.png'


// react-router-dom
import { Link} from 'react-router-dom';

// componentes
import { NavLink } from 'react-router-dom';

const Navbar = () => {

  const categorias = [
    {id:0, tipo: 'Interior', ruta: '/productos/interior'},
    {id:1, tipo: 'Exterior', ruta: '/productos/exterior'},
    {id:2, tipo: 'Accesorios', ruta: '/productos/accesorios'},
    {id:3, tipo: 'Macetas', ruta: '/productos/macetas'},
    {id:4, tipo: '', ruta: '/productos/todos'},
  ]


  return (
    <>
        <nav>
          <div className='navLink'>
            {categorias.map((categorias) => { 
              return <NavLink className='navBar-a' key={categorias.id} to={categorias.ruta}>{categorias.tipo}</NavLink>
            })}
          </div>
          <div className='navBarRight'> 
            <Link to='/cart'>
              <CardWidgt></CardWidgt>
            </Link>
            <Link to='/' className='logo'>Plant.</Link>
          </div>
        </nav>        
    </>
  )
}

export default Navbar