import React from 'react';

const TableCart = (props) => {
    return (
        <>
        <table className="table table-secondary tableCart">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Imagen</th>
                <th scope="col">Bebida</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Subtotal</th>
                <th scope="col">Eliminar</th>
                </tr>
            </thead>
            <tbody>
            {props.children}
            </tbody>
        </table>
        </>
    )
}

export default TableCart;
