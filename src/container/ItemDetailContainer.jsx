import React, {useState, useEffect}from 'react';
import ItemDetail from './itemDetail';
import data from '../data/data'
import {useParams} from 'react-router-dom';

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const [cargando, setCargando] = useState(true);
    const {id} = useParams()

    useEffect(() => {
        setCargando(true);
        const getBebidas = new Promise((resolve) => {
            setTimeout(() => {
                resolve(data);
            }, 2000)
        }); getBebidas.then((bebidas) => {
            setItem(bebidas.find((i) => i.id === id))
        }); getBebidas.finally(() =>{
            setCargando(false);
        })

    }, [id])

    return (
        <>
        {cargando ? <p className='pCargandoDetails'>Cargando Detalles</p> : <ItemDetail {...item}/>}
        </>
    );
};

export default ItemDetailContainer;

