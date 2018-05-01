import React from 'react';
import {Row, Col} from 'antd';

const Banner = () => {
    return (
        <div className={'Banner'}>
            <Row>
                <Col span={8}/>
                <Col span={12} className={'text-center'}>
                    <h2>FIND SOMETHING NEW</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et ante quis tortor placerat aliquet
                        sed bibendum urna.
                    </p>
                    <a href="">
                        MANTENERSE EN CONTACTO
                    </a>
                </Col>
            </Row>
        </div>
    );
};

export default Banner;
