import './style/App.scss';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
//--IMPORTAR EL HOME
import Navbar from './components/Navbar';
import ItemListContainer  from './container/ItemListContainer';
import ItemDetailContainer from './container/ItemDetailContainer';
import NotFound404 from './pages/NotFound404';
import Footer from './components/Footer'

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>

      <Switch>

        <Route exact path='/item/:id'>
          <ItemDetailContainer />
        </Route>

        <Route exact path='/category/:categoryId'>
          <ItemListContainer/>
        </Route>

        <Route exact path='/'>
          <ItemListContainer/>
        </Route>

        <Route path='*'>
          <NotFound404 />
        </Route>
      </Switch>

    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;