import React, { useContext, useEffect }from 'react';
import {Context} from './context/CartContext';
import CartCarrito from './CartCarrito';
import TableCart from './TableCart';
import { useLocation } from 'react-router-dom';


const Cart = () => {
    const {cart, total, onClean} = useContext(Context);
    const location = useLocation()
    console.log(location.pathname)
    
    //----Declaro el useEffect para que se me renderice el carrito cada ves que cambie el Cart
    useEffect(() => {
    }, [cart, total])

    // ---Funcion para que el footer no se vaya para arriba cuando no llegue a cubrir el viewPort
    const fixLayout = () => {
        const fixFooter = document.getElementById('fixFooter');
        fixFooter.classList.add('fixFooter');        
    };
    
    return (
        <>
        <div>
            <h2 align='center' className='titleCarrito'>Carrito de compras</h2> 
            <hr className='hrCart'/> 
        </div>

        <div>
            { cart.length !== 0 ?
            <div>
                <TableCart>
                {cart.map((i) => <CartCarrito id={i.id} key={i.id} img={i.img} name={i.name} cantidad={i.cantidad} subtotal={i.subtotal}/>)}
                </TableCart>
                
                <div className='divButtonCart'>
                    <button className='btn btn-dark btnCart' onClick={onClean}>Vaciar Carrito</button> 
                </div> 
                
                <div align='center' className='totalCart'><p>Total: ${total}</p></div>
            </div>
            :
            <div>
            { location.pathname === '/cart' ? fixLayout() : '' }
            {/* {fixLayout()} */}
            <p align='center' className='carritoVacio'>El carrito esta vacio</p>
            
            </div>
            }
        </div>
        </>
    );
};

export default Cart;