import { TableState } from "../model/table.model";
import { TableAction, TableActionTypes } from '../action/table.action';

const initialState: TableState = {
    list: [],
    loading: false,
    error: undefined
};

export function TableReducer(state: TableState = initialState, action: TableAction) {
    switch(action.type){
        case TableActionTypes.LOAD_TABLES:
            return {
                ...state,
                loading: true
            };
        case TableActionTypes.LOAD_TABLES_SUCCESS:
            console.log(action);
            return {
                ...state,
                list: action.payload,
                loading: false
            };
        case TableActionTypes.LOAD_TABLES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case TableActionTypes.ADD_TABLE:
            return {
                ...state,
                loading: true
            };
        case TableActionTypes.ADD_TABLE_SUCCESS:
            return  { ...state, list: [ ...state.list, action.payload], loading: false };
        case TableActionTypes.ADD_TABLE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case TableActionTypes.UPDATE_TABLE:
            return {
                ...state,
                loading: true
            };
        case TableActionTypes.UPDATE_TABLE_SUCCESS:
            let position = state.list.map(table => table.id).indexOf(action.payload.id);
            console.log(position);
            let list = [ ...state.list.filter(table => table.id != action.payload.id)];
            list.splice(position, 0, action.payload);
            return  {
                ...state, 
                list: list, 
                loading: false 
            };
        case TableActionTypes.UPDATE_TABLE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case TableActionTypes.DELETE_TABLE:
            return {
                ...state,
                loading: true
            };
        case TableActionTypes.DELETE_TABLE_SUCCESS:
            return  { ...state, list: state.list.filter(table => table.id !== action.payload), loading: false };
        case TableActionTypes.DELETE_TABLE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
}