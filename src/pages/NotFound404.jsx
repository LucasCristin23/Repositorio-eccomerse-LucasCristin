import React, {useState}from 'react';
import {Redirect} from 'react-router-dom';

const NotFound404 = () => {
    const [time, setTime] = useState(true);
    setTimeout(() => {
        setTime(false)
    },2000)
    return (
        <>
        {time ? <h1 className='h1NotFound'>Pagina no encontrada: Error 404</h1> : <Redirect to='/' />}
        </>
    );
};

export default NotFound404;
