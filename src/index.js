import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reducers from './redux/reducers'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

const store = createStore(
    reducers,
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('app')
);

module.hot.accept();
