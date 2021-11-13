import React from 'react';
import {NavLink} from 'react-router-dom';
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
            <ul className="navbar-nav navContenedor">
                <NavLink to='/' activeClassName='activeClassName'><li>Home</li></NavLink>
                <li>Clientes</li>
                <li id='idProductos'><NavLink to='/'>Productos</NavLink>
                    <ul id='desplegable'>
                        <NavLink to='/category/vodka'><li className='liCat'>Vodka</li></NavLink>
                        <NavLink to='/category/fernet'><li className='liCat'>Fernet</li></NavLink>
                        <NavLink to='/category/champagne'><li className='liCat'>Champagne</li></NavLink>
                        <NavLink to='/category/combos'><li className='liCat'>Combos</li></NavLink>
                    </ul>
                </li> 
                <NavLink to='/cart'><li><CartWidgetCarrito/></li></NavLink>
             </ul>
        </div>
    </div>
        </nav>  
        </>
    );
};
export default Navbar; 
