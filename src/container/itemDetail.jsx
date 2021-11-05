import React from 'react';

const itemDetail = ({name, category, precio, id, img, mililitros }) => {
    return (
        !id ? <h2 className='errorDetail'>La bebida no existe</h2> : 
        <>
        <h1 className='h1Detail'>Detalles</h1>
        <hr className='hrDetail'/>
        <div className='contenedorDetail '>
            <div className='contenedorImg'>
                <img src={img} alt={`Imagen ${name}`} />
            </div>
            <div className='contenedorDetailHijo'>
                <h2 className='nameDetail'>{name}</h2>
                <hr />
                <ul>
                    <li>- {category}</li>
                    <li>- {mililitros}Ml</li>
                    <li>- ${precio}</li>
                </ul>
                <button>Agregar al carrito</button>
            </div>
        </div>
        </>
    );
};

export default itemDetail;
