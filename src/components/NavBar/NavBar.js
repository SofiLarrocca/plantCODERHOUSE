// componntes
import CardWidgt from '../CardWidget/CardWidgt';

// styles
import '../../style/App.css'
import './nav.css';

// img
import palmera from '../../img/palmera_fondo.png'
import plantaFondo from '../../img/planta_fondo.png'

const Navbar = () => {


  return (
    <>
      <div className='container_navbar'>

        <img className='img_palmera' src={palmera} alt='palmera'/>
        <nav>
          <div>
            <a href='interior'>Interior</a>
            <a href='exterior'>Exterior</a>
            <a href='accesorios'>Accesorios</a>
          </div>

          <div className='navBarRight'> 
            <CardWidgt></CardWidgt>
            <p><span className='logo'>Plant.</span></p>
          </div>
        </nav>
        
        <img className='img_planta' src={plantaFondo} alt='planta'/>
        
      </div>
    </>
  )
}

export default Navbar