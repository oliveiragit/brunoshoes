import { combineReducers } from 'redux';

import cart from './cart/reducer';

const createRootReducer = () =>
  combineReducers({
    cart,
  });
export default createRootReducer;
