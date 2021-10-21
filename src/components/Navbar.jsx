import React from 'react';
import Prohibido from './Prohibido';
import CartWidgetCarrito from './CartWidget.jsx';

const Navbar = () => {
    return (
        <>
            <Prohibido prohibido="Beber con moderación - Prohibida su venta a menores de 18 años"/>
            <nav className="navbar navbar-expand-lg navbar-light navDeBs">
            <div className="container-fluid">
                <p className="navbar-brand bebidasComboLoco">Bebidas Combo loco</p>
             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" id="buttomNav">
                <span className="navbar-toggler-icon" id="trheeLines"></span>
            </button>
        <div className="collapse navbar-collapse navBS" id="navbarNavAltMarkup">
            <div className="navbar-nav navContenedor">
                <p>Home</p>
                <p>Clientes</p>
                {/*Estructura carrito*/}
                <div id="contadorDeCarrito">
                </div>
                <CartWidgetCarrito/>
             </div>
        </div>
    </div>
        </nav>  
        </>
    );
};
export default Navbar; 
