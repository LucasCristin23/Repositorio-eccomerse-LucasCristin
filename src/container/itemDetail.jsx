import React, {useState, useContext} from 'react';
import ItemCount from './ItemCount';
import {Link} from 'react-router-dom';
import {Context} from '../components/context/CartContext'

//------ANIMACIONES
import {Zoom} from "react-awesome-reveal";

const ItemDetail = ({name, category, precio, id, img, mililitros, stock }) => {

    const [buy, setBuy] = useState(false);
    const {onAdd} = useContext(Context)

    const agregarCarrito = (props) => {
        setBuy(true);
        onAdd({id, name, precio}, props.unidades)
        alert(`Agregaste ${props.unidades} unidades`)
    };

    return (!id ? <h2 className='errorDetail'>La bebida no existe</h2> : 
        <>
        <Zoom> 
        <h1 className='h1Detail'>Detalles</h1>
        <hr className='hrDetail'/>
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
                    <div className='btnNeon btn btn-dark'>
                        <span id='span1'></span>
                        <span id='span2'></span>
                        <span id='span3'></span>
                        <span id='span4'></span>
                        Finalizar Compra
                    </div>
                </Link>}

            </div>
        </div>
        </Zoom>
        </>
    );
};

export default ItemDetail;
