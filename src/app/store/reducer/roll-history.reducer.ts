import { RollHistoryState } from "../model/roll.model";
import { RollHistoryAction, RollHistoryActionTypes } from '../action/roll-history.action';

const initialState: RollHistoryState = [];

export function RollHistoryReducer(state: RollHistoryState = initialState, action: RollHistoryAction){
    switch(action.type){
        case RollHistoryActionTypes.ADD_ROLL_HISTORY:
          return [...state, action.payload];
        default:
          return state;
    }
}