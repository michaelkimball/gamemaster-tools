import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { v4 as uuid } from 'uuid';
import { Table } from '../store/model/table.model';
import { Store } from '@ngrx/store';
import { AppState } from '../store/model/app-state.model';
import { ImportTablesAction } from '../store/action/table.action';

@Component({
  selector: 'app-gm-table-import',
  templateUrl: './gm-table-import.component.html',
  styleUrls: ['./gm-table-import.component.styl']
})
export class GmTableImportComponent {
  importData: string;
  placeholder: string = '{ "name": "My First Imported Table", "items": [ { "description": "heck yeah!", "weight": 1 }, { "description": "super yeah!", "weight": 2 } ] }';
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<GmTableImportComponent>,
    private store: Store<AppState>
  ) { }

  onCancelClick(){
    this.dialogRef.close();
  }

  onImportClick(){
    let imports: Array<string> = this.importData.split("\n");
    let tables = imports.map((data) => {
      let table: Table = JSON.parse(data);
      table.id = uuid();
      table.items = table.items.map(item => {
        item.id = uuid();
        return item;
      });
      return table;
    });
    this.store.dispatch(new ImportTablesAction(tables));
  }
}
