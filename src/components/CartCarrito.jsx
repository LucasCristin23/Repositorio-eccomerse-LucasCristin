import React, {useContext} from 'react';
import {Context} from './context/CartContext';


const CartCarrito = ({img,name,cantidad,subtotal,id}) => {
    const {onDeleteItem} = useContext(Context)

    return (
        <div className='cartCarrito'>
            <div>{img}</div>
            <div>{name}</div>
            <div>{cantidad}</div>
            <div>{subtotal}</div>
            <button onClick={()=> onDeleteItem({id, subtotal})} className='btn btn-dark btnCarritoDelete'>X</button>
        </div>
    );
};
export default CartCarrito;
