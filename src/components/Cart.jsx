import React, { useContext, useEffect }from 'react';
import { Context } from './context/CartContext';
import CartCarrito from './CartCarrito';
import TableCart from './TableCart';
import { Link } from 'react-router-dom';


const Cart = () => {
    const {cart, total, onClean} = useContext(Context);
 
    //----Declaro el useEffect para que se me renderice el carrito cada ves que cambie el Cart
    useEffect(() => {
    }, [cart, total])
    
    return (
        <>
        <div>
            <h2 align='center' className='titleBebidas titleCarrito'>
                <span>Carrito de compras</span>    
            </h2> 
        </div>

        <div>
            { cart.length !== 0 ?
            <div>
                <TableCart>
                {cart.map((i) => <CartCarrito id={i.id} key={i.id} img={i.img} name={i.name} cantidad={i.cantidad} subtotal={i.subtotal}/>)}
                </TableCart>
                
                <div className='divButtonCart'>
                    <button className='btn btn-dark btnCart' onClick={onClean}>Vaciar Carrito</button> 
                    <Link to='/formCompra'><button className='btn btn-dark'>Continuar Compra</button></Link> 
                </div> 
                
                <div align='center' className='totalCart'><p>Total: ${total}</p></div>
            </div>
            :
            <p align='center' className='carritoVacio'>El carrito esta vacio</p>
            }
        </div>
        </>
    );
};

export default Cart;