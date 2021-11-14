import React, {useContext, useEffect,useState}from 'react';
import {Context} from './context/CartContext';
import CartCarrito from './CartCarrito';


const Cart = () => {
    const {cart, total, onClean} = useContext(Context);

    //----Declaro el useEffect para que se me renderice el carrito cada ves que cambie el Cart
    useEffect(() => {
    }, [cart, total])

    return (
        <>
        <div>
            <p>hola soy el cart</p>
            <p>El total es {total}</p> 
        </div>

        <div>
            {cart.map((i) => <CartCarrito id={i.id} key={i.id} img={i.img} name={i.name} cantidad={i.cantidad} subtotal={i.subtotal}/>)}
        </div>

        <button className='btn btn-dark' onClick={onClean}>Vaciar Carrito</button>
        </>
    );
};

export default Cart;