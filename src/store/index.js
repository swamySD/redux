import {createStore,applyMiddleware} from 'redux';
import { compose} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import counterReducer from '../reducers';


const middleware = applyMiddleware(thunk,logger )







 const store=createStore(counterReducer,compose(middleware, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))
 



export default store 