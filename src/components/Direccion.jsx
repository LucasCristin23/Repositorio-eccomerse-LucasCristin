import React from 'react';

const Direccion = () => {
    return (
        <div className='divDireccion'>
            <div>
                <h2>Ubicacion</h2>
                <hr/>
                <p>Calle falsa 123</p>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.04922376962!2d-58.3192513570252!3d-34.70393837771164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a33265d264d717%3A0x1ead5ade4e098764!2sAvenida%20Bartolom%C3%A9%20Mitre%20%26%20Las%20Flores%2C%20Wilde%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1628718790368!5m2!1ses-419!2sar" width="600" height="450" loading="eager" title='Direccion'></iframe>
        </div>
    );
};

export default Direccion;
