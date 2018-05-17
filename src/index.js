import React from 'react';
import App from './components/App';
import reducers from './redux/reducers'
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import mySaga from './redux/sagas/sagas';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducers,
    compose(
        applyMiddleware(sagaMiddleware),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

sagaMiddleware.run(mySaga);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
)

module.hot.accept();
