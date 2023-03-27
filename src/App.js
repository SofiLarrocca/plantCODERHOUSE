import './style/App.css'

// Componentes
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <>
    <NavBar></NavBar>
    <ItemListContainer greeting={'Ecommerce Plant'}></ItemListContainer>
    </>
  );
}

export default App;
