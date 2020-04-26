import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../store/model/app-state.model';
import { Table, TableSearchResult } from '../store/model/table.model';
import { Observable } from 'rxjs';
import { LoadTablesAction, AddTableAction } from '../store/action/table.action';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'gm-table-add',
  templateUrl: './gm-table-add.component.html',
  styleUrls: ['./gm-table-add.component.styl']
})
export class GmTableAddComponent implements OnInit {
  tableAddForm;
  tableSearchForm;
  tables: Array<any> = [];
  searchResults$: Observable<TableSearchResult>;
  loading$: Observable<Boolean>;
  error$: Observable<Error>;
  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppState>
  ) {
    this.tableAddForm = this.formBuilder.group({
      name: ''
    });
    this.tableSearchForm = this.formBuilder.group({
      tableSearch: ''
    });
  }

  ngOnInit(): void {
    this.searchResults$ =  this.store.select(store => store.tables.searchResult);
    this.loading$ = this.store.select(store => store.tables.loading);
    this.error$ = this.store.select(store => store.tables.error);

    this.store.dispatch(new LoadTablesAction());
  }

  onSubmit(tableData){
    tableData.items = [];
    tableData.id = uuid();
    this.tables.push(tableData);
    this.tableAddForm.reset();
    this.store.dispatch(new AddTableAction(tableData));
  }

  page(event){
    this.store.dispatch(new LoadTablesAction(event.pageIndex));
  }

}
