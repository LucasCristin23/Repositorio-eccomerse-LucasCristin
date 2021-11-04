import React, {useState}from 'react';
import Navbar from '../components/Navbar';
import {Redirect} from 'react-router-dom';

const NotFound404 = () => {
    const [time, setTime] = useState(true);
    setTimeout(() => {
        setTime(false)
    },2000)
    return (
        <>
        <Navbar />

        {time ? <h1>Pagina no encontrada: Error 404</h1> : <Redirect to='/' />}
        </>
    );
};

export default NotFound404;
