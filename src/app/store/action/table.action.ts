import { Action } from '@ngrx/store';
import { Table, TableSearchResult } from '../model/table.model';

export enum TableActionTypes {
    LOAD_TABLES = '[TABLES] Load Tables',
    LOAD_TABLES_SUCCESS = '[TABLES] Load Tables Success',
    LOAD_TABLES_FAILURE = '[TABLES] Load Tables Failure',
    ADD_TABLE = '[TABLES] Add Table',
    ADD_TABLE_SUCCESS = '[TABLES] Add Table Success',
    ADD_TABLE_FAILURE = '[TABLES] Add Table Failure',
    UPDATE_TABLE = '[TABLES] Update Table',
    UPDATE_TABLE_SUCCESS = '[TABLES] Update Table Success',
    UPDATE_TABLE_FAILURE = '[TABLES] Update Table Failure',
    DELETE_TABLE = '[TABLES] Delete Table',
    DELETE_TABLE_SUCCESS = '[TABLES] Delete Table Success',
    DELETE_TABLE_FAILURE = '[TABLES] Delete Table Failure'
}

export class LoadTablesAction implements Action {
    readonly type = TableActionTypes.LOAD_TABLES;
    constructor(public payload?: number) {}
}

export class LoadTablesSuccessAction implements Action {
    readonly type = TableActionTypes.LOAD_TABLES_SUCCESS;
    constructor(public payload: TableSearchResult) {}
}

export class LoadTablesFailureAction implements Action {
    readonly type = TableActionTypes.LOAD_TABLES_FAILURE;
    constructor(public payload: Error) {}
}

export class AddTableAction implements Action {
    readonly type = TableActionTypes.ADD_TABLE;
    constructor(public payload: Table) {}
}

export class AddTableSuccessAction implements Action {
    readonly type = TableActionTypes.ADD_TABLE_SUCCESS;
    constructor(public payload: Table) {}
}

export class AddTableFailureAction implements Action {
    readonly type = TableActionTypes.ADD_TABLE_FAILURE;
    constructor(public payload: Error) {}
}

export class UpdateTableAction implements Action {
    readonly type = TableActionTypes.UPDATE_TABLE;
    constructor(public payload: Table) {}
}

export class UpdateTableSuccessAction implements Action {
    readonly type = TableActionTypes.UPDATE_TABLE_SUCCESS;
    constructor(public payload: Table) {}
}

export class UpdateTableFailureAction implements Action {
    readonly type = TableActionTypes.UPDATE_TABLE_FAILURE;
    constructor(public payload: Error) {}
}

export class DeleteTableAction implements Action {
    readonly type = TableActionTypes.DELETE_TABLE;
    constructor(public payload: string) {}
}

export class DeleteTableSuccessAction implements Action {
    readonly type = TableActionTypes.DELETE_TABLE_SUCCESS;
    constructor(public payload: string) {}
}

export class DeleteTableFailureAction implements Action {
    readonly type = TableActionTypes.DELETE_TABLE_FAILURE;
    constructor(public payload: Error) {}
}

export type TableAction = 
    LoadTablesAction |
    LoadTablesSuccessAction |
    LoadTablesFailureAction |
    AddTableAction |
    AddTableSuccessAction |
    AddTableFailureAction |
    UpdateTableAction |
    UpdateTableSuccessAction |
    UpdateTableFailureAction |
    DeleteTableAction |
    DeleteTableSuccessAction |
    DeleteTableFailureAction;