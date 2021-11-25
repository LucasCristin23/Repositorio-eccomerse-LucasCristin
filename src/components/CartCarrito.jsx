import React, {useContext} from 'react';
import {Context} from './context/CartContext';
import CruzWidget from './CruzWidget';


const CartCarrito = ({img,name,cantidad,subtotal,id}) => {
    const {onDeleteItem, cart} = useContext(Context);

    return (
        <tr>
        <th scope="row">{(cart.findIndex(e => e.id === id) + 1)}</th>
        <td><div className='imgCarrito'><img src={img} alt="Imagen Producto" /></div></td>
        <td>{name}</td>
        <td>{cantidad}</td>
        <td>${subtotal}</td>
        <td><button 
        className='btn' onClick={ ()=> onDeleteItem({id, subtotal}) }><CruzWidget /></button></td> 
        </tr>


        // <div className='cartCarrito'>
        //     <div className='imgCarrito'><img src={img} alt="Imagen Producto" /></div>
        //     <div>{name}</div>
        //     <div>{cantidad}</div>
        //     <div>${subtotal}</div>
        //     <button onClick={()=> onDeleteItem({id, subtotal})} className='btn btn-dark btnCarritoDelete'>X</button>
        // </div>
    );
};
export default CartCarrito;
