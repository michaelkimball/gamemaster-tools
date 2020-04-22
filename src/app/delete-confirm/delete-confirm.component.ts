import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-confirm',
  templateUrl: './delete-confirm.component.html',
  styleUrls: ['./delete-confirm.component.styl']
})
export class DeleteConfirmComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DeleteConfirmComponent>
    ) {}

  onYesClick(){
    this.dialogRef.close(true);
  }

  onNoClick(){
    this.dialogRef.close();
  }

}
