import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from '@ngrx/effects';
import { LoadTablesAction, TableActionTypes, LoadTablesSuccessAction, LoadTablesFailureAction, AddTableAction, AddTableSuccessAction, AddTableFailureAction, UpdateTableAction, UpdateTableSuccessAction, UpdateTableFailureAction, DeleteTableAction, DeleteTableSuccessAction, DeleteTableFailureAction } from '../action/table.action';
import { TableServiceService as TableService } from 'src/app/table-service.service';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';


@Injectable()
export class TableEffects {
    @Effect() loadTables$ = this.actions$.pipe(
        ofType<LoadTablesAction>(TableActionTypes.LOAD_TABLES),
        mergeMap((action) => 
            this.tableService.getTables(action.pageNumber, action.name).pipe(
                map(data => {
                    return new LoadTablesSuccessAction(data)
                }),
                catchError(error => of(new LoadTablesFailureAction(error)))
            )
        )
    )

    @Effect() addTable$ = this.actions$.pipe(
        ofType<AddTableAction>(TableActionTypes.ADD_TABLE),
        mergeMap((data) => 
            this.tableService.addTable(data.payload).pipe(
                map(() => new AddTableSuccessAction(data.payload)),
                catchError(error => of(new AddTableFailureAction(error)))
            )
        )
    )

    @Effect() updateTable$ = this.actions$.pipe(
        ofType<UpdateTableAction>(TableActionTypes.UPDATE_TABLE),
        mergeMap((data) => 
            this.tableService.updateTable(data.payload).pipe(
                map(() => new UpdateTableSuccessAction(data.payload)),
                catchError(error => of(new UpdateTableFailureAction(error)))
            )
        )
    )

    @Effect() deleteTable$ = this.actions$.pipe(
        ofType<DeleteTableAction>(TableActionTypes.DELETE_TABLE),
        mergeMap((data) => 
            this.tableService.deleteTable(data.payload).pipe(
                map(() => new DeleteTableSuccessAction(data.payload)),
                catchError(error => of(new DeleteTableFailureAction(error)))
            )
        )
    )

    constructor(
        private actions$: Actions,
        private tableService: TableService
    ) {}
}