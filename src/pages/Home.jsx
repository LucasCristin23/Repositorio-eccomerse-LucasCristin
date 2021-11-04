import React from 'react'
import Navbar from '../components/Navbar';
import Slogan from '../components/Slogan'
import ItemListContainer from '../container/ItemListContainer';
import Direccion from '../components/Direccion';
import Footer from '../components/Footer';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

const Home = () => {
    return (
        <>  
        <BrowserRouter>
            <Navbar/>

            <Slogan/>

            <Direccion/>

            <Switch>

                <Route exact path='/'>
                    <ItemListContainer/>
                </Route>
                   
                <Route exact path='/category/:categoryId'>
                    <ItemListContainer/>
                </Route>

            </Switch>
        
            <Footer/>

        </BrowserRouter>
        </>
    );
};
export default Home;

