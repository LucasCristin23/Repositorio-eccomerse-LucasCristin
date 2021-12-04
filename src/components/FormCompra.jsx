import React, { useContext, useState } from 'react';
import { Bounce } from 'react-awesome-reveal';
import { Context } from './context/CartContext';
import swal from 'sweetalert';
//---Base de datos
import db from '../firebase/firebase';
import { addDoc, collection } from 'firebase/firestore';

const FormCompra = () => {
    const { total, cart, onClean } = useContext(Context);
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState(''); 
    const [ number, setNumber ] = useState('');
    const [ direccion, setDireccion ] = useState('');

    const finalizarCompra = async () => {
        try {
            const collectionOrders = collection(db, 'orders');
            const addProducts = await addDoc(collectionOrders, {
                buyer: {
                    name: name,
                    email: email,
                    numero: number,
                    direccion: direccion
                },
                items: cart?.map((product) => product),
                total,
            });
            if(addProducts?._key?.path?.segment?.[1] !== ''){
                onClean();
                swal('Pedido Confirmado', 'Se a enviado el pedido', 'success');
            };
        } 
        catch(err){
            console.log(err);
        };
    };

    return (
        <Bounce>
            <div className="container contenedorForm">
                <h2 className='titleBebidas' id='titleForm'>
                    <span>Completa tus datos</span>
                </h2>

                <form action="" id='formCompra' onSubmit={e => e.preventDefault()}>
                    <div className="mb-3">
                        <label htmlFor="inputName" className="form-label">Nombre</label>
                        <input onChange={evt => setName(evt.target.value)} type="text" placeholder='Nombre y Apellido' required id='inputName' className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputEmail" className="form-label">Email</label>
                        <input onChange={evt => setEmail(evt.target.value)} type="email" placeholder='Recorda poner el @' required id='inputEmail' className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputNumero" className="form-label">Numero</label>
                        <input onChange={evt => setNumber(evt.target.value)} type="number" placeholder='Celular o numero fijo' required id='inputNumero' className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputDireccion" className="form-label">Direccion</label>
                        <input onChange={evt => setDireccion(evt.target.value)} type="text" placeholder='Direccion' required id='inputDireccion' className="form-control" />
                    </div>
                    <button  onClick={ finalizarCompra() } type="submit" className="btn btn-dark">Finalizar compra</button>
                </form>
            </div>
        </Bounce>
    )
}

export default FormCompra;
