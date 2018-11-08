import {combineReducers} from 'redux';
import SearchReducer from './SearchReducer';
import PageReducer from './PageReducer';


export default combineReducers({
    search : SearchReducer,
    page : PageReducer
});