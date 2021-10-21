import React from 'react';
import Item from './Item';

const ItemList = ({bebidas}) => {
    return (
        <>
        {bebidas.map((bebida) =>
            <Item key={bebida.id} name={bebida.nombre} precio={bebida.precio} img={bebida.img}/>
        )};
        </>
    );
};

export default ItemList;