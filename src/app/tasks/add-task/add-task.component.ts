import { Component, ElementRef, ViewChild } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from 'src/app/interfaces/task-interface';
import { v4 as uuidv4 } from 'uuid';
import { MatDialog } from '@angular/material/dialog';
import { AlertDialogComponent } from '../alert-dialog-component/alert-dialog-component.component';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent {
  @ViewChild('title') title!: ElementRef<HTMLInputElement>;
  @ViewChild('description') description!: ElementRef<HTMLInputElement>;

  constructor(private taskService: TaskService, private dialog: MatDialog) {}

  onAddTask() {
    console.log('Title:', this.title);
    console.log('Description:', this.description);
    if (
      this.title.nativeElement.value.trim().length === 0 ||
      this.title.nativeElement.value.length > 25
    ) {
      this.openAlertDialog(
        '¿Tienes Problemas?',
        'El título es obligatorio y no puede superar los 25 caracteres.'
      );
      return;
    }

    const task: Task = {
      id: uuidv4(),
      title: this.title.nativeElement.value,
      description: this.description.nativeElement.value,
      done: false,
    };

    this.addTask(task);
    this.openAlertDialog(
      'Enhorabuena!',
      'Su tarea "' + this.title.nativeElement.value + '" ha sido añadida!!'
    );

    this.title.nativeElement.value = '';
    this.description.nativeElement.value = '';
  }

  addTask(task: Task) {
    this.taskService.addTask(task);
  }

  openAlertDialog(title: string, message: string): void {
    this.dialog.open(AlertDialogComponent, {
      data: {
        title: title,
        message: message,
      },
    });
  }
}
