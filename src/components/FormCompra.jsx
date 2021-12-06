import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
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
    const [ id , setId ] = useState('')

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
                setId(addProducts?._key?.path)
                onClean();
            };
        } 
        catch(err){
            console.log(err);
        };
    }; 

    const alertBuy = () => {
        swal({
            title: 'Confirmar pedido',
            text: '¿Desea confirmar el pedido?',
            buttons: [ 'Cancelar pedido', true ]
          })
          .then( resultado => {
            if(resultado !== true){ 
                swal({
                    title:'Cancelado',
                    text:'El pedido se cancelo con exito',
                    icon:'success',
                })
            }
            else{
                finalizarCompra()
                swal({
                    title: 'Pedido confirmado',
                    text: `El pedido fue enviado con el id ${ id }`,
                    icon:'success',
                })
                .then( () => {
                    <Redirect to='/' />
                })
            }
          }
        );
    };



    
    
    return (
        <Bounce>
            <div className="container contenedorForm">
                <h2 className='titleBebidas' id='titleForm'>
                    <span>Completa tus datos</span>
                </h2>
                <form action="" id='formCompra' onSubmit={ e => e.preventDefault() }>
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
                    <button onClick={ () => alertBuy() } className="btn btn-dark" disabled={ name === '' || email === '' || number === '' || direccion === ''} >Finalizar compra</button>
                </form>
            </div>
            
        </Bounce>
    );
};
export default FormCompra;
