import React from 'react';

const itemDetail = ({name, category, precio, id, img, mililitros }) => {
    return (
        !id ? <h2>La bebida no existe</h2> : 
        <>
        <h1>Detalles</h1>
        <div>
            <div>
                <img src={img} alt={`Imagen ${name}`} />
            </div>
            <div>
                <h2>{name}</h2>
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
