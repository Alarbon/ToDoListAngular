import { Component, Input } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from 'src/app/interfaces/task-interface';
import { MatDialog } from '@angular/material/dialog';
import { EditAlertComponent } from '../edit-alert/edit-alert.component';
import { NotificationService } from '../../shared/notification/notification.service';
import { DialogWarningDeleteComponent } from 'src/app/shared/dialog-warning-delete/dialog-warning-delete.component';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent {
  @Input() task: Task = {
    id: '',
    title: '',
    description: '',
    done: false,
  };

  showFullDescription = false;

  constructor(
    private taskService: TaskService,
    private dialog: MatDialog,
    private notificationService: NotificationService
  ) {}

  deleteTask(task: Task) {
    this.taskService.deleteTask(task.id);
  }

  editTask(id: string) {
    let taskBis: Task = this.taskService
      .getTasks()
      .filter((task) => task.id === id)[0];
    this.taskService.editTask(taskBis);
  }

  toggleDone(id: string) {
    this.taskService.toggleDone(id);
  }

  rewriteTask(task: Task) {
    this.taskService.editTask(task);
  }

  toggleDescription() {
    this.showFullDescription = !this.showFullDescription;
  }

  openEditDialog(): void {
    const dialogRef = this.dialog.open(EditAlertComponent, {
      width: '400px', // Puedes ajustar el ancho según tus necesidades
      data: {
        title: this.task.title,
        description: this.task.description,
        task: { ...this.task },
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        if (result.title.trim().length !== 0) {
          result.task.title = result.title;
          result.task.description = result.description;

          this.rewriteTask(result.task);
        } else {
          this.notificationService.showNotification(
            'El título no puede estar vacío.'
          );
        }
      }
    });
  }

  openDeleteDialog(): void {
    const dialogRef = this.dialog.open(DialogWarningDeleteComponent, {
      width: '400px',
      data: {
        title: '¿Seguro que quieres borrar esta tarea?',
        message: this.task.title,
        messageButton: 'Borrar Tarea',
      },
    });
    
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        let taskDeleted: Task = this.task;
        this.deleteTask(taskDeleted);
        this.notificationService.showNotification(
          'Tarea borrada con exito!',
        )
      }
    })
  }
}
