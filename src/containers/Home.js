import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import NavBar from '../components/Home/NavBar';
import CarouselBanner from '../components/Home/CarouselBanner';
import Collection from '../components/Home/Collection';
import AboutMe from '../components/Home/AboutMe';
import '../sass/home.scss';


class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>
                <NavBar />
                <CarouselBanner />
                <Collection />
                <AboutMe />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        state: state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)