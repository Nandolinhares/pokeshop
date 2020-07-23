import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/rootSaga';

//Reducers
import userReducer from './reducers/userReducer';
import uiReducer from './reducers/uiReducer';

//Middleware
const sagaMiddleware = createSagaMiddleware();

const initialState = {};

const reducers = combineReducers({
    user: userReducer,
    ui: uiReducer
});

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));
const store = createStore(reducers, initialState, enhancer);  
sagaMiddleware.run(rootSaga);

export default store;