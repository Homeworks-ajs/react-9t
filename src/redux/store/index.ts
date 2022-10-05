import {createStore, combineReducers, Reducer} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import productListReducer from '../reducers/productListReducer';
import serviceAddReducer from '../reducers/serviceAddReducers';

const reducers: Reducer = combineReducers({
  serviceList: productListReducer,
  serviceAdd: serviceAddReducer
})

const store = createStore(reducers, composeWithDevTools());
export default store;