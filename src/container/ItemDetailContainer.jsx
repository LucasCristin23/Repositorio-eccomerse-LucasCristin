import React, {useState, useEffect}from 'react';
import ItemDetail from './ItemDetail';
import {useParams} from 'react-router-dom';
//----importo base de datos
import db from '../firebase/firebase';
import { doc, getDoc } from 'firebase/firestore';

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const [cargando, setCargando] = useState(true);
    const {id} = useParams()

    useEffect(() => {
        
        const myBebida = doc(db, 'products', id);
        getDoc(myBebida)
        .then((res) =>{
            const resultado = {id: res.id, ...res.data()};
            setItem(resultado);
        })
        .finally(() => {
            setCargando(false)
        })
        // setCargando(true);
        // const getBebidas = new Promise((resolve) => {
        //     setTimeout(() => {
        //         resolve(data);
        //     }, 2000)
        // }); getBebidas.then((bebidas) => {
        //     setItem(bebidas.find((i) => i.id === id))
        // }); getBebidas.finally(() =>{
        //     setCargando(false);
        // })

    }, [id])

    return (
        <>
            {cargando ? <p className='pCargandoDetails'>Cargando Detalles</p> : <ItemDetail {...item}/> }
        </>
    );
};

export default ItemDetailContainer;

