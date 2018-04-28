import React from 'react';
import { Row, Col } from 'antd';
import User from '../../assets/icons/user.png';
import ShoppingBag from '../../assets/icons/shopping-bag.png';
import Menu from '../../assets/icons/menu.png';

const NavBar = () => {
    return (
        <div className={'container NavBar'}>
            <Row>
                <Col span={24}>
                    <Row>
                        <Col span={20}>
                            <h2>Shakymar</h2>
                        </Col>
                        <Col span={4}>
                            <img src={User} alt=""/>
                            <img src={ShoppingBag} alt=""/>
                            <img src={Menu} alt=""/>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default NavBar;
