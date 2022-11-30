import './App.css';
import Navbar from './Navbar/Navbar.jsx';
import ItemListContainer from './ItemListContainer/ItemListContainer.jsx';
import Footer from './Footer/Footer.jsx';

const App = () => {
  return (
    <>
      <Navbar/>
      <ItemListContainer greeting={"Bienvenido a MangaHouse!"}/>
      <Footer/>
    </>
      
  );
}

export default App;