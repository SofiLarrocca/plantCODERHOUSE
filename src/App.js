import './style/App.css'

// Componentes
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


// react-router-dom
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home/Home';

function App() {
  return (
   <>
    <Router>
      <NavBar />
    <Routes>
      <Route path='/' element = {<Home />}/>
      <Route path='/productos/:categoria' element = {<ItemListContainer greeting={'Todos los productos'} />} />
      <Route path='/detalle/:itemId' element ={<ItemDetailContainer />} />
      <Route path='*' element = {<Navigate to='/'/>}/>
    </Routes>
    </Router>
  </>
  );
}

export default App;
