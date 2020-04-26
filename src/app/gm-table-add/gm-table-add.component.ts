import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../store/model/app-state.model';
import { Table, TableSearchResult } from '../store/model/table.model';
import { Observable, Subject } from 'rxjs';
import { LoadTablesAction, AddTableAction } from '../store/action/table.action';
import { v4 as uuid } from 'uuid';
import { debounceTime } from 'rxjs/operators';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

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
  pageIndex: number = 0;
  faSearch = faSearch;
  tableSearchTyping: Subject<string> = new Subject();
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
    this.tableSearchTyping.pipe(
      debounceTime(500)
    ).subscribe(searchTextValue => {
        this.store.dispatch(new LoadTablesAction(this.pageIndex, searchTextValue))
      })
  }

  onSubmit(tableData){
    tableData.items = [];
    tableData.id = uuid();
    this.tables.push(tableData);
    this.tableAddForm.reset();
    this.store.dispatch(new AddTableAction(tableData));
    this.store.dispatch(new LoadTablesAction(this.pageIndex, this.tableSearchForm.value.tableSearch));
  }

  onTableSearchKeyup(name){
    this.tableSearchTyping.next(name);
  }

  page(event){
    this.pageIndex = event.pageIndex;
    this.store.dispatch(new LoadTablesAction(event.pageIndex, this.tableSearchForm.value.tableSearch));
  }

}
