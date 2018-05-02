import React from 'react';
import {Row, Col} from 'antd';
import img1 from '../../assets/home/instagram1.jpg';
import img2 from '../../assets/home/instagram2.jpg';
import img3 from '../../assets/home/instagram3.jpg';
import img4 from '../../assets/home/instagram4.jpg';

const Instagram = () => {
    return (
        <div className={'container Instagram '}>
            <Row className={'box-shadow'}>
                <Col span={24} className={'text-center'}>
                    <h2>INSTAGRAM</h2>
                    <h3>#SHAKYMAR</h3>
                </Col>
                <Col span={6}>
                    <img src={img1} alt="" className={'img-fluid'}/>
                </Col>
                <Col span={6}>
                    <img src={img2} alt="" className={'img-fluid'}/>
                </Col>
                <Col span={6}>
                    <img src={img3} alt="" className={'img-fluid'}/>
                </Col>
                <Col span={6}>
                    <img src={img4} alt="" className={'img-fluid'}/>
                </Col>
            </Row>
        </div>
    );
};

export default Instagram;
