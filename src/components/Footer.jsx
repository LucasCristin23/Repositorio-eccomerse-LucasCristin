import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { Context } from './context/CartContext';


const Footer = () => {

  const location = useLocation()
  const { cart } = useContext(Context)

    return (
      <footer className={ cart.length === 0 && location.pathname === '/cart' ? 'footer fixFooter' : 'footer' }  >
        {/*PARTE DE CONTACTOS Y DEMAS*/}
        {/*DIV SIGAMOS CONECTADOS Y FORMAS DE PAGO*/}
        <div className="divPadreFooter">
          <div>
            <p className="pTitleFooter">Sigamos Conectados</p>
            <div className="divPadreIconos">
              <div className="contenedorIcons"><a href="https://www.facebook.com/lucas.cristin.5"><img src="https://firebasestorage.googleapis.com/v0/b/ecommerce-bebidas-combo-loco.appspot.com/o/iconFacebook.svg?alt=media&token=2031c393-7c28-41f9-ade0-f1332a1f8670" alt="Icono Facebook"/></a></div>
              <div className="contenedorIcons"><a href="https://www.instagram.com/luki_cristin/?hl=es-la"><img src="https://firebasestorage.googleapis.com/v0/b/ecommerce-bebidas-combo-loco.appspot.com/o/iconInstagram.svg?alt=media&token=7b2029ba-17b6-458b-8e66-81ff31b4a439" alt="Icono de instagram"/></a></div>
              <div className="contenedorIcons"><a href="https://wa.me/1123495480?text=Hola,%20Vi%20tu%20pagina%20y%20quisiera%20saber%20..."><img src="https://firebasestorage.googleapis.com/v0/b/ecommerce-bebidas-combo-loco.appspot.com/o/iconwpp.svg?alt=media&token=7af15dae-b19e-4346-8adc-84f9f53e88aa" alt="Icono Whatsapp"/></a></div>
            </div>
          </div>
          <div>
            <p className="pTitleFooter">Formas de Pago</p>
            <div className="divPadreIconos">
              <div className="contenedorIcons"><img src="https://firebasestorage.googleapis.com/v0/b/ecommerce-bebidas-combo-loco.appspot.com/o/iconTageta.svg?alt=media&token=a05935bd-be0a-48bb-8ba2-058ffee2f05e" alt="Icono targetas"/></div>
              <div className="contenedorIcons"><img src="https://firebasestorage.googleapis.com/v0/b/ecommerce-bebidas-combo-loco.appspot.com/o/iconEfectivo.svg?alt=media&token=2b41cd8f-d618-4174-97c7-975b03292439" alt="Icono Pago en efectivo"/></div>
            </div>
          </div>
          <div>
            <p className="pTitleFooter">Nosotros</p>
            <div>
              <div><p>- Preguntas frecuentes</p></div>
              <div><p>- ¿Quiénes somos?</p></div>
            </div>
          </div>
        </div>

      {/*DERECHOS RESERVADOS*/}
        <div className="derechosReservados">
            <p>Bebidas Combo loco ® - 2021. Todos los derechos reservados - Diseñada por <a href="https://www.instagram.com/luki_cristin/?hl=es-la" id="aLukitas">Lucas Cristin</a></p>
        </div>
    </footer>
    );
};

export default Footer;
