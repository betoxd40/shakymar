import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import NavBar from '../components/Common/NavBar';
import Footer from '../components/Common/Footer';
import CarouselBanner from '../components/Home/CarouselBanner';
import Collection from '../components/Home/Collection';
import AboutMe from '../components/Home/AboutMe';
import FeaturedProducts from '../components/Home/FeaturedProducts';
import Banner from '../components/Home/Banner';
import BlogHome from '../components/Home/BlogHome';
import Instagram from '../components/Home/Instagram';
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
                <FeaturedProducts />
                <Banner />
                <BlogHome />
                <Instagram />
                <Footer />
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