import { TableState, TableSearchResult } from "../model/table.model";
import { TableAction, TableActionTypes } from '../action/table.action';

const initialState: TableState = {
    searchResult: new TableSearchResult(),
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
            return {
                ...state,
                searchResult: {
                    ...action.payload,
                },
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
            return  { ...state, loading: false };
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
            let position = state.searchResult.results.map(table => table.id).indexOf(action.payload.id);
            let list = [ ...state.searchResult.results.filter(table => table.id != action.payload.id)];
            list.splice(position, 0, action.payload);
            return  {
                ...state, 
                searchResult: {
                    ...state.searchResult,
                    results: list
                },
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
            return  { ...state, 
                searchResult: {
                    ...state.searchResult,
                    results: state.searchResult.results.filter(table => table.id !== action.payload)
                }, loading: false };
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