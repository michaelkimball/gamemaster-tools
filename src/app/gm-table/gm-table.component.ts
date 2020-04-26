import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatTable } from '@angular/material/table'
import { FormBuilder } from '@angular/forms';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { GmTableItemEditComponent } from '../gm-table-item-edit/gm-table-item-edit.component';
import { Table, Item } from '../store/model/table.model';
import { Store } from '@ngrx/store';
import { AppState } from '../store/model/app-state.model';
import { UpdateTableAction, DeleteTableAction } from '../store/action/table.action';
import { v4 as uuid } from 'uuid';
import { AddRollHistoryAction } from '../store/action/roll-history.action';
import { formatDate } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RollMessageComponent } from '../roll-message/roll-message.component';
import { faPen, faCheck, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { DeleteConfirmComponent } from '../delete-confirm/delete-confirm.component';

@Component({
  selector: 'gm-table',
  templateUrl: './gm-table.component.html',
  styleUrls: ['./gm-table.component.styl']
})
export class GmTableComponent implements OnInit {
  @Input('tableData') tableData: Table;
  isEditing: boolean = false;
  tableForm;
  totalWeight: number = 0;
  displayedColumns: string[] = ['position', 'weight', 'item'];
  @ViewChild(MatTable) table: MatTable<Item>;
  faPen = faPen;
  faCheck = faCheck;
  faTrashAlt = faTrashAlt;
  constructor(
    private formBuilder: FormBuilder,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<GmTableItemEditComponent>,
    private store: Store<AppState>,
    private snackBar: MatSnackBar
  ) {
    this.tableForm = this.formBuilder.group({
      tableName: '',
      description: '',
      weight: 1
    });
  }

  ngOnInit(): void {
    this.tableForm.controls['tableName'].setValue(this.tableData.name);
    if(this.tableData.items.length > 0){
      this.totalWeight = this.tableData.items.map((data) => data.weight).reduce((weight1, weight2) => weight1 + weight2);
    }
  }

  onTableNameKeypress(event, name){
    if (event.key === "Enter") {
      event.preventDefault();
      this.finishEditingName(name);
    }
  }

  onTableRowClick(data){
    let dialogRef = this.dialog.open(GmTableItemEditComponent, {
      data: data
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result == undefined){
        return;
      }
      if(result == 'delete'){
        let items = this.tableData.items.filter((e) => e != data);
        items = this.resetPosition(items);
        this.tableData = {
          ...this.tableData,
          items: items
        };
      } else {
        let items = [...this.tableData.items.filter(table => table.id != result.id), result];
        moveItemInArray(items, items.length-1, result.position-1);
        this.tableData = {
          ...this.tableData,
          items: items
        };
      }
      if(this.tableData.items.length > 0){
        this.totalWeight = this.tableData.items.map((data) => data.weight).reduce((weight1, weight2) => weight1 + weight2);
      }
      this.table.renderRows();
      this.store.dispatch(new UpdateTableAction(this.tableData));
    });
  }
  
  onSubmit(tableData: Item){
    this.tableForm.reset();
    tableData.position = this.tableData.items.length + 1;
    tableData.id = uuid();
    this.tableData = {
      ...this.tableData,
      items: [...this.tableData.items, tableData]
    }
    this.tableForm.patchValue({weight: 1});
    this.totalWeight += tableData.weight;
    this.table.renderRows();
    this.store.dispatch(new UpdateTableAction(this.tableData));
  }

  dropTable(event: CdkDragDrop<Array<Item>>) {
    const prevIndex = this.tableData.items.findIndex((d) => d === event.item.data);
    let items = [...this.tableData.items];
    moveItemInArray(items, prevIndex, event.currentIndex);
    this.tableData = {
      ...this.tableData,
      items: this.resetPosition(items)
    };
    this.table.renderRows();
    this.store.dispatch(new UpdateTableAction(this.tableData));
  }

  onRollClick(){
    let roll = Math.floor(Math.random() * this.totalWeight) + 1;
    for(let i = 0; i < this.tableData.items.length; i++){
      if(this.tableData.items[i].weight >= roll){
        let rollLog = `${formatDate(new Date(), 'M/d/yy, h:mm:ss a', 'en-US')}   ${this.tableData.items[i].description}`;
        this.store.dispatch(new AddRollHistoryAction(rollLog));
        this.snackBar.openFromComponent(RollMessageComponent, { data: this.tableData.items[i].description });
        break;
      }
      roll -= this.tableData.items[i].weight;
    }
  }

  resetPosition(items: Array<Item>){
    return items.map((data, index) => {
      return {
        ...data,
        position: index + 1
      }
    });
  }

  finishEditingName(name: string){
    this.isEditing = false;
    this.tableData = {
      ...this.tableData,
      name: name
    };
    this.store.dispatch(new UpdateTableAction(this.tableData));
  }

  deleteTable(){
    let dialogRef = this.dialog.open(DeleteConfirmComponent, {
      data: this.tableData.name
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.store.dispatch(new DeleteTableAction(this.tableData.id));
      }
    });
  }
}
