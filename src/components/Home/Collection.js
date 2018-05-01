import React from 'react';
import {Row, Col} from 'antd';
import hombre from '../../assets/home/home_hombre.jpg';
import mujer from '../../assets/home/home_mujer.jpg';

const Collection = () => {
    return (
        <div className={'container Collection'}>
            <Row>
                <Col span={12}>
                    <img src={hombre} alt="" className={'img-fluid img-men'}/>
                    <div className={'box-collection'}>
                        <h2>HOMBRE <br/> COLLECTION</h2>
                        <hr/>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et ante quis tortor placerat
                            aliquet sed bibendum urna. Nullam enim dui, elementum sit amet lobortis ut, varius non
                            justoe.
                        </p>
                        <a href="">
                            COMPRAR AHORA
                            <hr/>
                        </a>
                    </div>
                </Col>
                <Col span={12}>
                    <div className={'box-collection '}>
                        <h2>WOMAN <br/> COLLECTION</h2>
                        <hr/>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et ante quis tortor placerat
                            aliquet sed bibendum urna. Nullam enim dui, elementum sit amet lobortis ut, varius non
                            justo.
                        </p>
                        <a href="">
                            COMPRAR AHORA
                            <hr/>
                        </a>
                    </div>
                    <img src={mujer} alt="" className={'img-fluid img-woman'}/>
                </Col>
            </Row>
        </div>
);
};

export default Collection;
