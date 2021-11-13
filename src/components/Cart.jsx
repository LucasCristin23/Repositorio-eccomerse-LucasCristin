import React, {useContext, useEffect}from 'react';
import {Context} from './context/CartContext';
import CartCarrito from './CartCarrito';


const Cart = () => {
    const {cart, total, onClean, onDeleteItem} = useContext(Context);

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
            {/* {cart.map((i, key)=> 
            <>
            {key=i.id}
            <div style={{height:200, width:200}}>{i.img}</div>
            <div>{i.name}</div>
            <div>{i.cantidad}</div>
            <div>{i.subtotal}</div>
            <button onClick={()=> onDeleteItem(i.id)} className='btn btn-dark'>x</button>
            </>
            )} */}
        </div>

        <button className='btn btn-dark' onClick={onClean}>Vaciar Carrito</button>
        </>
    );
};

export default Cart;

