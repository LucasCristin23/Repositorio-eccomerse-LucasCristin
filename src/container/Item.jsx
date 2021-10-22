import React from 'react';

const Item = ({name, img, precio}) => {
    return (
        <div className='contenedorBebidas'>
            <p className='tituloBebidasContenedor'>{name}</p>  
            <hr/>
            <img src={img} alt="Imagen Producto" className='imagenesBebidas'/>
            <p className='precio'>${precio}</p>
            <button className='btn btn-dark'>Agregar al carrito</button>
        </div>
    );
};
export default Item;
