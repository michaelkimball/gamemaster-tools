import { Action } from '@ngrx/store';

export enum RollHistoryActionTypes {
    ADD_ROLL_HISTORY = '[ROLL HISTORY] Add Roll History'
}

export class AddRollHistoryAction implements Action {
    readonly type = RollHistoryActionTypes.ADD_ROLL_HISTORY;

    constructor(public payload: string){}
}

export type RollHistoryAction = AddRollHistoryAction;