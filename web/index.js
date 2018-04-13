import React from 'react';
import ReactDOM  from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import {applyMiddleware,createStore} from 'redux';
import reduxThunk from 'redux-thunk'
import reducers from './reducers'
const appElement = document.getElementById('app');
const createStoreMiddleWare = applyMiddleware(reduxThunk)(createStore);
const store = createStoreMiddleWare(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
if (module.hot) {
    module.hot.accept('./App', () => {
        const NextApp = require('./App').default;
        render(<NextApp />, appElement);
    });
}

ReactDOM.render((
  <Provider store={store}>
  <App/>
  </Provider>
), appElement);
