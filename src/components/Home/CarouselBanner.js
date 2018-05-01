import React from 'react';
import { Row, Col, Carousel } from 'antd';

const CarouselBanner = () => {
    return (
        <div className={'Carousel'}>
            <Row>
                <Col span={24}>
                    <Carousel effect="fade" dots={true} autoplay={true}>
                        <div>
                            <div className={'slides-background '}>
                                <h1>slide-1</h1>
                            </div>
                        </div>
                        <div>
                            <div className={'slides-background'}>
                                <h1>slide-2</h1>
                            </div>
                        </div>
                        <div>
                            <div className={'slides-background'}>
                                <h1>slide-3</h1>
                            </div>
                        </div>
                    </Carousel>
                </Col>
            </Row>
        </div>
    );
};

export default CarouselBanner;
