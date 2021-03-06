import React from 'react';
import {Router, Route, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/index';
import createLogger from 'redux-logger';
import AppContainer from './components/app/AppContainer';

const loggerMiddleware = createLogger();

const store = createStore(
	reducers,
	applyMiddleware(
		thunk,
		loggerMiddleware
	)
);

class Root extends React.Component {
    render(){
        return (
            <Provider store={store}>
                <Router history={browserHistory}>
                    <Route path="/" component={AppContainer}>
                    
                    </Route>
                </Router>
            </Provider>
        )
    }
}

export default Root;