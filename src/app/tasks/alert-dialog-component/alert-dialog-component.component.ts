import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-alert-dialog-component',
  templateUrl: 'alert-dialog-component.component.html'
})
export class AlertDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: {title:string, message: string }) {}
}