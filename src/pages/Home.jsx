import React from 'react'
import Navbar from '../components/Navbar';
import Slogan from '../components/Slogan'
import ItemListContainer from '../container/ItemListContainer';
import Direccion from '../components/Direccion';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>  
        
        <Navbar/>

        <Slogan/>

        <Direccion/>

        <ItemListContainer/>
        


        <Footer/>
        </>
    );
};
export default Home;

