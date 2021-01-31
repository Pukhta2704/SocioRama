import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootreducer from './reducers/rootreducer';
const initialState = {};
const middleware = [thunk];
const store = createStore(rootreducer, initialState, applyMiddleware(...middleware));

export default store;

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
