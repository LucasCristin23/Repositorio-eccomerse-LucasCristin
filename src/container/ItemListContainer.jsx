import React, {useEffect, useState} from 'react';
import Slogan from '../components/Slogan';
import Direccion from '../components/Direccion';
import ItemList from './ItemList';
import bebidas from '../data/data';
import {useParams} from 'react-router-dom';

const ItemListContainer = () => {
    //--Declaro los estados
    const [stateBebidas, setStateBebidas] = useState([]);
    const [cargando, setCargando] = useState(true);

    const {categoryId} = useParams()

    //--Declaro el useEffect (ciclo de vida)
    useEffect(() =>{
        //--Declaro una nueva promesa para obtener los datos
        const listaDeBebidas = new Promise((res, rej) =>{
            //---Simulo un retrazo en el server 
            bebidas.length > 0 ? setTimeout(() => {
                res(bebidas)
            },3000) : rej(new Error('Hubo un error'));
        });
        listaDeBebidas.then((bebidas) => {
            //---Cambiamos los valores de los estados
            categoryId ? setStateBebidas(bebidas.filter((i) => i.category === categoryId)) :  setStateBebidas(bebidas.filter((i) => i.place === 'home')); setCargando(false);
        })
        listaDeBebidas.catch(error => console.error(error))
    }, [categoryId]);
        
    return (
        <>
        <Slogan />

        <Direccion />
        
        <div className='container seccionBebidas'>
            <h2 className="titleBebidas">Bebidas</h2>
            <hr/>
            <div className='bebidas'>
            {cargando ? <p className='pCargandoProductos'>Cargando Bebidas...</p> :<ItemList bebidas={stateBebidas}/> }
            </div>
        </div>
        </>
    );
};

export default ItemListContainer;