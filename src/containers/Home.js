import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>
                <h1>Home</h1>
                <p>Prueba texto de parrafo</p>
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