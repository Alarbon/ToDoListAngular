// task-configuration.component.ts

import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NotificationService } from 'src/app/shared/notification/notification.service';
import { TaskService } from '../task.service';
import { DialogWarningDeleteComponent } from 'src/app/shared/dialog-warning-delete/dialog-warning-delete.component';

@Component({
  selector: 'app-task-configuration',
  templateUrl: './task-configuration.component.html',
  styleUrls: ['./task-configuration.component.css'],
})
export class TaskConfigurationComponent {
  constructor(
    private taskService: TaskService,
    private dialog: MatDialog,
    private notificationService: NotificationService
  ) {}

  borrarTareasCompletadas() {
    const dialogRef = this.dialog.open(DialogWarningDeleteComponent, {
      width: '400px',
      data: {
        title: '¿Seguro que quieres borrar las tareas?',
        message: 'No las volveras a ver!!',
        messageButton: 'Borrar Tareas Completadas',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
       this.taskService.clearTasksDone();
       
       this.notificationService.showNotification(
        'Tareas completadas borradas con exito!',
      )
      }
      
    });
  }
  borrarTodasLasTareas() {
   
    const dialogRef = this.dialog.open(DialogWarningDeleteComponent, {
      width: '400px',
      data: {
        title: '¿Seguro que quieres borrar todas las tareas?',
        message: 'No las volveras a ver!!!',
        messageButton: 'Borrar Todas las Tareas ',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
       this.taskService.clearTasks();

       this.notificationService.showNotification(
        'Tareas borradas con exito!',
      )
      }
     
    });
  }
}
