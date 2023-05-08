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
import { useState } from 'react';


// fontAwesome
// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)

  const categorias = [
    {id:0, tipo: 'Interior', ruta: '/productos/interior'},
    {id:1, tipo: 'Exterior', ruta: '/productos/exterior'},
    {id:2, tipo: 'Accesorios', ruta: '/productos/accesorios'},
  ]


  return (
    <>
        <nav>
          <div className={`${isOpen ? 'openMenu' : 'navLink'}`}>
              {categorias.map((categorias) => { 
                return <NavLink 
                onClick={() =>setIsOpen(false)}
                key={categorias.id} to={categorias.ruta}>{categorias.tipo}</NavLink>
              })}
          </div>

          {isOpen ? <FontAwesomeIcon onClick={() =>setIsOpen(false)} className='menu' icon={faXmark} /> 
                  : <FontAwesomeIcon onClick={() =>setIsOpen(true)}  className='menu' icon={faBars} />
          }

          <div className= {`${isOpen ? 'navBarRight' : 'navBarRight hidden'}`}> 
            <Link 
                  onClick={() =>setIsOpen(false)}
                  to='/cart'>
              <CardWidgt></CardWidgt>
            </Link>
            <Link 
                  onClick={() =>setIsOpen(false)}
                  to='/' className='logo'>Plant.</Link>
          </div>

        </nav>        
    </>
  )
}

export default Navbar