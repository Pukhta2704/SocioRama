import React from 'react';
import ReactDom from 'react-dom';
import './style.css';
import App from './App';
import { Route, Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import history from './history';
import store from './redux/store';

ReactDom.render(
	<Router history={history}>
		<Provider store={store}>
			<Route exact path="/cookielogin/:token" component={App}/>
			<Route exact path="*" component={App}/>
		</Provider>
	</Router>,
	document.getElementById('root')
);
