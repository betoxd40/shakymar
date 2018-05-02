import React from 'react';
import {Row, Col} from 'antd';
import phone from '../../assets/icons/phone-call.png';
import mail from '../../assets/icons/mail.png';
import location from '../../assets/icons/placeholder.png';
const Footer = () => {
    return (
        <div className={'container-fluid Footer'}>
            <div className={'container'}>
                <Row>
                    <Col span={6} className={'padding-column'}>
                        <h3>ABOUT US</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et ante quis tortor placerat aliquet
                            sed bibendum urna. Nullam enim dui, elementum sit amet lobortis ut, varius non justo.
                        </p>
                        <li>
                            <ul>
                                <img src={phone} alt=""/>
                                <p>
                                    0412-9073299
                                </p>
                            </ul>
                            <ul>
                                <img src={mail} alt=""/>
                                <p>
                                    info@shakymar.es
                                </p>
                            </ul>
                            <ul>
                                <img src={location} alt=""/>
                                <p>
                                    Chacao, don david
                                </p>
                            </ul>
                        </li>
                    </Col>
                    <Col span={6} className={'padding-column'}>
                        <h3>MI CUENTA</h3>
                        <li>
                            <ul>Sign In</ul>
                            <ul>My Cart</ul>
                            <ul>Checkout</ul>
                        </li>
                    </Col>
                    <Col span={6} className={'padding-column'}>
                        <h3>DEPARTMENTS</h3>
                        <li>
                            <ul>Inicio</ul>
                            <ul>Inventario</ul>
                            <ul>Delux</ul>
                            <ul>Blog</ul>
                            <ul>Contacto</ul>
                        </li>
                    </Col>
                    <Col span={6} className={'padding-column'}>
                        <h3>SÍGUENOS EN <br/>
                            NUESTRAS REDES</h3>
                        <li>
                            <ul>Facebook</ul>
                            <ul>Twitter</ul>
                            <ul>Instagram</ul>
                        </li>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <hr/>
                        <p className={'copyright'}>
                            © 2018 SHAKYMAR. Todos los derechos reservados. Diseñado por Smart4U
                        </p>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Footer;
