import React from 'react';
import { Link } from 'react-router-dom';
import BtnNeon from '../components/BtnNeon';

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

                <BtnNeon text='Agregar al carrito'/>

            </Link>
        </div>
        </Fade> 

        </>      
    );
};
export default Item;
