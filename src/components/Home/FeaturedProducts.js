import React from 'react';
import {Row, Col} from 'antd';
import img from '../../assets/products/product1.jpeg';

const FeaturedProducts = () => {
    return (
        <div className={'container FeaturedProducts'}>
            <Row>
                <Col span={24}>
                    <h2>PRODUCTOS DESTACADOS</h2>
                </Col>
                <Col span={24}>
                    <Row>
                        <Col span={8} className={'col-padding-2'}>
                            <img src={img} alt="" className={'img-fluid'}/>
                            <h3>Product name</h3>
                            <h4><b>€ 99</b></h4>
                        </Col>
                        <Col span={8} className={'col-padding-2'}>
                            <img src={img} alt="" className={'img-fluid'}/>
                            <h3>Product name</h3>
                            <h4><b>€ 99</b></h4>
                        </Col>
                        <Col span={8} className={'col-padding-2'}>
                            <img src={img} alt="" className={'img-fluid'}/>
                            <h3>Product name</h3>
                            <h4><b>€ 99</b></h4>
                        </Col>
                        <Col span={8} className={'col-padding-2'}>
                            <img src={img} alt="" className={'img-fluid'}/>
                            <h3>Product name</h3>
                            <h4><b>€ 99</b></h4>
                        </Col>
                        <Col span={8} className={'col-padding-2'}>
                            <img src={img} alt="" className={'img-fluid'}/>
                            <h3>Product name</h3>
                            <h4><b>€ 99</b></h4>
                        </Col>
                        <Col span={8} className={'col-padding-2'}>
                            <img src={img} alt="" className={'img-fluid'}/>
                            <h3>Product name</h3>
                            <h4><b>€ 99</b></h4>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default FeaturedProducts;
