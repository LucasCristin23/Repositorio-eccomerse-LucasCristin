import React, {useContext} from 'react';
import {Context} from './context/CartContext';


const CartCarrito = ({img,name,cantidad,subtotal,id}) => {
    const {onDeleteItem} = useContext(Context)

    return (
        <div>
            <div style={{height:200, width:200}}>{img}</div>
            <div>{name}</div>
            <div>{cantidad}</div>
            <div>{subtotal}</div>
            <button onClick={()=> onDeleteItem({id, subtotal})} className='btn btn-dark'>x</button>
        </div>
    );
};
export default CartCarrito;
