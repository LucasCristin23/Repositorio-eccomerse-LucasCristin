import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light navDeBs">
            <div className="container-fluid">
                <a className="navbar-brand bebidasComboLoco">Bebidas Combo loco</a>
             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" id="buttomNav">
                <span className="navbar-toggler-icon" id="trheeLines"></span>
            </button>
        <div className="collapse navbar-collapse navBS" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
                <a className="nav-link" href="#">Clientes</a>
                {/*Estructura carrito*/}
                <a className="nav-link estructuraCarrito" href="#">
                    <div id="contadorDeCarrito">
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-basket3" viewBox="0 0 16 16">
                            <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM3.394 15l-1.48-6h-.97l1.525 6.426a.75.75 0 0 0 .729.574h9.606a.75.75 0 0 0 .73-.574L15.056 9h-.972l-1.479 6h-9.21z"/>
                        </svg>
                    </div>
                </a>
             </div>
        </div>
    </div>
        </nav>  
        </>
    );
};
export default Navbar; 
