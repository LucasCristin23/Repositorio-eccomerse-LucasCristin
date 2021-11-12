import React, {useContext}from 'react';
import {Context} from './context/CartContext';

const Cart = () => {
    const {cart, total} = useContext(Context)

    return (
        <div>
            <p>hola soy el cart</p>
            <p>El total es {total}</p> 
        </div>
    );
};

export default Cart;
