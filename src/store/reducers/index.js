import { combineReducers } from "redux";
import burgersReducer from './burgers';
import cartReducer from './cart';
import filtersReducer from './filters';

const rootReducer = combineReducers({ burgersReducer, cartReducer, filtersReducer });

export default rootReducer;