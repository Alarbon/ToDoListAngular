import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog-warning-delete',
  templateUrl: './dialog-warning-delete.component.html',
  styleUrls: ['./dialog-warning-delete.component.css'],
})
export class DialogWarningDeleteComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogWarningDeleteComponent>,

    @Inject(MAT_DIALOG_DATA)
    public data: { title: string; message: string; messageButton: string }
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
