import React, { useState, useContext } from 'react';
import ItemCount from './ItemCount';
import BtnNeon from '../components/BtnNeon';
import { Link } from 'react-router-dom';
import { Context } from '../components/context/CartContext';
import swal from 'sweetalert';

//------ANIMACIONES
import { Zoom } from "react-awesome-reveal";

const ItemDetail = ({ name, category, precio, id, img, mililitros, stock }) => {

    const [buy, setBuy] = useState(false);
    const {onAdd} = useContext(Context)

    const agregarCarrito = (props) => {
        setBuy(true);
        onAdd({id, name, precio, img}, props.unidades)
        swal("Operacion Exitosa", `Agregaste ${props.unidades} ${props.unidades === 1 ? "unidad" : "unidades"} Al carrito`, "success");
    };

    return (!id ? <h2 className='errorDetail'>La bebida no existe</h2> : 
        <>
        <Zoom triggerOnce> 
        <h1 className='titleBebidas h1Detail'>
            <span>Detalles</span>
        </h1>
        <div className='contenedorDetail '>
            <div className='contenedorImg'>
                <img src={img} alt={`Imagen ${name}`} />
            </div>
            <div className='contenedorDetailHijo'>
                <h2 className='nameDetail'>{name}</h2>
                <hr />
                <ul>
                    <li>- {category}</li>
                    <li>- {mililitros}Ml</li>
                    <li>- ${precio}</li>
                </ul>

                {!buy ? <ItemCount stock={stock} onAdd={agregarCarrito}/> : 
                <Link to='/cart'>
                    <BtnNeon text='Finalizar Compra'/>
                </Link>}

            </div>
        </div>
        </Zoom>
        </>
    );
};

export default ItemDetail;
