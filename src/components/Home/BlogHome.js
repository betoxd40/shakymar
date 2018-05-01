import React from 'react';
import {Row, Col} from 'antd';
import img from '../../assets/home/blog-img.jpg';


const BlogHome = () => {
    return (
        <div className={'container BlogHome'}>
            <Row>
                <Col span={24} className={'text-center'}>
                    <h2>DESDE EL BLOG</h2>
                </Col>
                <Col span={24}>
                    <Row>
                        <Col span={8}>
                            <img src={img} alt="" className={'img-fluid'}/>
                        </Col>
                        <Col span={4}>
                            <div className={'box-blog'}>
                                <Row>
                                    <Col span={24}>
                                        <h2>TITLE NAME</h2>
                                    </Col>
                                    <Col span={12}>
                                        <p>5/1/2018</p>
                                    </Col>
                                    <Col span={12}>
                                        <a href="">
                                            LEER MÁS
                                        </a>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col span={8}>
                            <img src={img} alt="" className={'img-fluid'}/>
                        </Col>
                        <Col span={4}>
                            <div className={'box-blog'}>
                                <Row>
                                    <Col span={24}>
                                        <h2>TITLE NAME</h2>
                                    </Col>
                                    <Col span={12}>
                                        <p>5/1/2018</p>
                                    </Col>
                                    <Col span={12}>
                                        <a href="">
                                            LEER MÁS
                                        </a>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default BlogHome;
