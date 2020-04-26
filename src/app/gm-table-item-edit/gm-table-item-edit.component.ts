import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'gm-table-item-edit',
  templateUrl: './gm-table-item-edit.component.html',
  styleUrls: ['./gm-table-item-edit.component.styl']
})
export class GmTableItemEditComponent {
  tableForm;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<GmTableItemEditComponent>
    ) {
      this.tableForm = this.formBuilder.group(data);
    }
  onUpdateClick(formData){
    this.dialogRef.close(formData);
  }
  onDeleteClick(){
    this.dialogRef.close('delete');
  }
}
