import React from 'react'
import Navbar from '../components/Navbar';
import ItemListContainer from '../container/ItemListContainer';

const Home = () => {
    return (
        <>  
        <ItemListContainer prohibido="Beber con moderación - Prohibida su venta a menores de 18 años"/>
        <Navbar/>
        
        {/*ACA VAN TODOS LOS COMPONENTES QUE FORMAN EL HOME*/}


        </>
    );
};
export default Home;

