import React from 'react';

const Item = ({name, img, precio}) => {
    return (
        <div>
            <p>{name}</p>
            <hr/>
            <img src={img} alt="Imagen Producto" />
            <p>${precio}</p>
            <button className='btn btn-dark'>Agregar al carrito</button>
        </div>
    );
};
export default Item;
