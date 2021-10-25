import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
        {/*PARTE DE CONTACTOS Y DEMAS*/}
        {/*DIV SIGAMOS CONECTADOS Y FORMAS DE PAGO*/}
        <div className="divPadreFooter">
          <div>
            <p className="pTitleFooter">Sigamos Conectados</p>
            <div className="divPadreIconos">
              <div className="contenedorIcons"><a href="https://www.facebook.com/lucas.cristin.5"><img src="/images/iconFacebook.svg" alt="Icono Facebook"/></a></div>
              <div className="contenedorIcons"><a href="https://www.instagram.com/luki_cristin/?hl=es-la"><img src="/images/iconInstagram.svg" alt="Icono de instagram"/></a></div>
              <div className="contenedorIcons"><a href="https://wa.me/1123495480?text=Hola,%20Vi%20tu%20pagina%20y%20quisiera%20saber%20..."><img src="/images/iconwpp.svg" alt="Icono Whatsapp"/></a></div>
            </div>
          </div>
          <div>
            <p className="pTitleFooter">Formas de Pago</p>
            <div className="divPadreIconos">
              <div className="contenedorIcons"><img src="/images/iconTageta.svg" alt="Icono targetas"/></div>
              <div className="contenedorIcons"><img src="/images/iconEfectivo.svg" alt="Icono Pago en efectivo"/></div>
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
