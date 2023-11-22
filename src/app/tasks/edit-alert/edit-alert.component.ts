import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Task } from 'src/app/interfaces/task-interface';

@Component({
  selector: 'app-edit-alert',
  templateUrl: './edit-alert.component.html',
  styleUrls: ['./edit-alert.component.css'],
})
export class EditAlertComponent {
  constructor(
    public dialogRef: MatDialogRef<EditAlertComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: { title: string; description: string; task: Task }
  ) {}

 
  onNoClick(): void {
    this.dialogRef.close();
  }
}
