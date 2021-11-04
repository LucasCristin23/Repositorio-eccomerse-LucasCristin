import React from 'react';
import {Link} from 'react-router-dom';

const Item = ({name, img, precio, id}) => {
    return (
        <>
        <Link to={`/item/${id}`}>
        <div className='contenedorBebidas'>
            <p className='tituloBebidasContenedor'>{name}</p>  
            <hr/>
            <img src={img} alt="Imagen Producto" className='imagenesBebidas'/>
            <p className='precio'>${precio}</p>
            <button className='btn btn-dark'>Agregar al carrito</button>
        </div>
        </Link> 
        </>      
    );
};
export default Item;
