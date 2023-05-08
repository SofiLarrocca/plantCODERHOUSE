import './style/App.css'

// Componentes
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartView from './components/CartView/CartView';
import Home from './components/Home/Home';
import Checkout from './components/Checkout/Checkout';

// cartContext
import { CartContext, CartProvider } from './components/Context/CartContext';

// react-router-dom
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {

  return (
   <>
    <CartProvider>
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element = {<Home />}/>
        <Route path='/productos/:categoria' element = {<ItemListContainer />} />
        <Route path='/productos' element = {<ItemListContainer greeting={'Todos los productos'} />} />
        <Route path='/detalle/:itemId' element ={<ItemDetailContainer />} />
        <Route path='/carrito' element ={<CartView />} />
        <Route path='/checkout' element ={<Checkout />} />
        <Route path='*' element = {<Navigate to='/'/>}/>
      </Routes>
      </Router>
    </CartProvider>
 
  </>
  );
}

export default App;
