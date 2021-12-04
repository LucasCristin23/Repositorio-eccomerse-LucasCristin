import './style/App.scss';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {CartContext} from './components/context/CartContext';
//--COMPONENTES
import ItemListContainer  from './container/ItemListContainer';
import ItemDetailContainer from './container/ItemDetailContainer';
import NotFound404 from './pages/NotFound404';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import FormCompra from './components/FormCompra';

function App() {
  return (
    <>
    <BrowserRouter>
      <CartContext>

      <Navbar />  

      <Switch>

        <Route exact path='/item/:id'>
          <ItemDetailContainer />
        </Route>

        <Route exact path='/category/:categoryId'>
          <ItemListContainer/>
        </Route>

        <Route exact path='/cart'>
          <Cart />
        </Route>

        <Route exact path='/formCompra'>
          <FormCompra />
        </Route>

        <Route exact path='/'>
          <ItemListContainer/>
        </Route>

        <Route path='*'>
          <NotFound404 />
        </Route>
      </Switch>

    <Footer/>

    </CartContext>
    </BrowserRouter>
    </>
  );
}

export default App;