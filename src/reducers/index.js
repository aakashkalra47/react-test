import {combineReducers} from 'redux';
import {  nameReducer} from "./nameReducer";
export const Redcuers=combineReducers({
    name:nameReducer
})