import React, {useState} from 'react';
import swal from 'sweetalert';

const ItemCount = (props) => {

    const [stock, setStock] = useState(props.stock);
    const [unidades, setUnidades] = useState(1);

    const handleStock = {
        //----A LAS FUNCIONES LES PONGO : PORQUE ESTAN DENTRO DE UN OBJETO

        sumarUnidades : () => {
            stock === 0 ? swal("No hay mas Stock") 
            :
            setUnidades(unidades + 1)
            setStock(stock - 1)  
        },
        restarUnidades : () => {
            unidades === 1 ? swal("No se pueden sacar mas unidades")
            :
            setUnidades(unidades - 1)
            setStock(stock + 1)  
        }
    }

    return (
        <>
        <div className='itemCount'>
            <button className='btn btn-dark' onClick={handleStock.restarUnidades}>-</button>
            <p className='pUnidades'>{unidades}</p>
            <button className='btn btn-dark' onClick={handleStock.sumarUnidades} disabled={stock === 0}>+</button>
        </div>

        {/* Boton neon */}
        <div className='btnNeon btn btn-dark' onClick={() => props.onAdd({ unidades })}>
            <span id='span1'></span>
            <span id='span2'></span>
            <span id='span3'></span>
            <span id='span4'></span>
            Agregar al carrito
        </div>
        </>
    )
}
export default ItemCount;