import React from 'react';
import { Link } from 'react-router-dom';

//----ANIMACIONES
import { Fade } from "react-awesome-reveal";

const Item = ({name, img, precio, id}) => {
    return (
        <>
        <Fade  className='contenedorBebidas'> 
        <div>
            
            <Link to={`/item/${id}`} className='Link'>
                <p className='tituloBebidasContenedor'>{name}</p>  
                <hr/>
                <img src={img} alt="Imagen Producto" className='imagenesBebidas'/>
                <p className='precio'>${precio}</p>

                {/* Boton neon */}
                <div className='btnNeon btn btn-dark'>
                    <span id='span1'></span>
                    <span id='span2'></span>
                    <span id='span3'></span>
                    <span id='span4'></span>
                    Agregar al carrito
                </div>
            </Link>
        </div>
        </Fade> 

        </>      
    );
};
export default Item;
