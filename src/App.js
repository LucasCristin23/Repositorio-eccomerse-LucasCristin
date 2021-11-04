import './style/App.scss';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
//--IMPORTAR EL HOME
import Home from './pages/Home';
import ItemDetailContainer from './container/ItemDetailContainer';
import NotFound404 from './pages/NotFound404';

function App() {
  return (
    <>
    <BrowserRouter>
      <Switch>

        <Route exact path='/item/:id'>
          <ItemDetailContainer />
        </Route>

        <Route exact path='/'>
          <Home/>
        </Route>

        <Route path='*'>
          <NotFound404 />
        </Route>
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;