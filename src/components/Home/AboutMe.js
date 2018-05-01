import React from 'react';
import {Row, Col} from 'antd';

const AboutMe = () => {
    return (
        <div className={'container-fluid AboutMe'}>
            <div className={'container'}>
                <Row>
                    <Col span={12}>
                        <Row>
                            <Col span={24}>
                                <h2>SOBRE MÍ</h2>
                            </Col>
                            <div className={'text-about'}>
                                <Col span={4}>
                                    <hr/>
                                </Col>
                                <Col span={24}>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et ante quis tortor placerat
                                        aliquet sed bibendum urna. Nullam enim dui, elementum sit amet lobortis ut, varius non
                                        justo. Cras placerat tristique diam id accumsan. Phasellus non fringilla diam, vitae dapibus
                                        leo. Pellentesque a sapien id nunc accumsan tincidunt. Pellentesque nec risus vitae lectus
                                        scelerisque dapibus. Quisque vehicula odio eu gravida pulvinar. Duis gravida ante ac
                                        condimentum malesuada. Aliquam vestibulum ornare nulla, id aliquam orci auctor vulputate.
                                        Cras quis mattis nulla, id pretium elit. <br/> <br/>

                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et ante quis tortor placerat
                                        aliquet sed bibendum urna. Nullam enim dui, elementum sit amet lobortis ut, varius non
                                        justo. Cras placerat tristique diam id accumsan. Phasellus non fringilla diam, vitae dapibus
                                        leo. Pellentesque a sapien id nunc accumsan tincidunt. Pellentesque nec risus vitae lectus
                                        scelerisque dapibus. Quisque vehicula odio eu gravida pulvinar. Duis gravida ante ac
                                        condimentum malesuada. Aliquam vestibulum ornare nulla, id aliquam orci auctor vulputate.
                                        Cras quis mattis nulla, id pretium elit.
                                    </p>
                                    <a href="">
                                        CONTACT
                                    </a>
                                </Col>
                            </div>
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default AboutMe;
