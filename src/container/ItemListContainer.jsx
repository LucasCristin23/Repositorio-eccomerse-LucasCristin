import React, {useEffect, useState} from 'react';
import Slogan from '../components/Slogan';
import Direccion from '../components/Direccion';
import ItemList from './ItemList';
import {useParams} from 'react-router-dom';
//----importo base de datos
import db from '../firebase/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';

const ItemListContainer = () => {

    //--Declaro los estados
    const [stateBebidas, setStateBebidas] = useState([]);
    const [cargando, setCargando] = useState(true);

    const {categoryId} = useParams()

    //--Declaro el useEffect (ciclo de vida)
    useEffect(() =>{

        const myBebidas =  categoryId ? 
        query(collection(db, 'products'), where('category', '==', categoryId))
        : 
        query(collection(db,'products'), where('place', '==', 'home'))

        getDocs(myBebidas)
        .then((res) => {
            const resultado = res.docs.map((doc) => {
                return {...doc.data(), id: doc.id}
            })

            
            setStateBebidas(resultado);
            // categoryId ? setStateBebidas(resultado.filter((i) => i.category === categoryId)) :  setStateBebidas(resultado.filter((i) => i.place === 'home')); setCargando(false);
        })
        .finally(() => { setCargando(false)})

    }, [categoryId]);
        
    return (
        <>
            <Slogan />

            <Direccion />

            <div className='container seccionBebidas'>
                <h2 className="titleBebidas">Bebidas</h2>
                <hr/>
                <div className='bebidas'>
                    {cargando ? <p className='pCargandoProductos'>Cargando Bebidas...</p> :<ItemList bebidas={stateBebidas}/>}
                </div>
            </div>

            <div>
                
            </div>
        </>
    );
};

export default ItemListContainer;