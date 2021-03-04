import {combineReducers} from 'redux';
import roomsReducer from './roomsSlice';


/** 
 * root reducer
*/
 const rootReducer = combineReducers({ 
    rooms: roomsReducer,
   });


 export default rootReducer;  