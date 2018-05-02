import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import NavBar from '../components/Common/NavBar';
import Footer from '../components/Common/Footer';
import '../sass/deluxe.scss';
import Banner from "../components/Deluxe/Banner";


class Deluxe extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>
                <NavBar />
                <Banner />
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

export default connect(mapStateToProps, mapDispatchToProps)(Deluxe)