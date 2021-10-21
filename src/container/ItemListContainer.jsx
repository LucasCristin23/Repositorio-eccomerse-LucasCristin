import React, {useEffect, useState} from 'react';
import ItemList from './ItemList';
import bebidas from '../data/data';

const ItemListContainer = () => {
    //--Declaro los estados
    const [stateBebidas, setStateBebidas] = useState([]);
    const [cargando, setCargando] = useState(true);

    //--Declaro el useEffect (ciclo de vida)
    useEffect(() =>{
        //--Declaro una nueva promesa para obtener los datos
        const listaDeBebidas = new Promise((res, rej) =>{
            //---Simulo un retrazo en el server 
            setTimeout(() => {
                res(bebidas)
            },3000)
        });
        listaDeBebidas.then((bebidas) => {
            //---Cambiamos los valores de los estados
            setStateBebidas(bebidas);
            setCargando(false);
        })
    }, []);
        
    return (
        <div>
            <h2>Bebidas</h2>
            {cargando ? <p>Cargando Bebidas</p> : <ItemList productos={setStateBebidas}/>}
        </div>
    );
};

export default ItemListContainer;