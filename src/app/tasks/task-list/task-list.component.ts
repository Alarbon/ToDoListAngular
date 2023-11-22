import { Component } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {

  constructor(private taskService: TaskService) { }
  
  getTasks(){
    return this.taskService.getTasks();
  }

  getTasksDone(){
    return this.taskService.getTasksDone();
  }

  getTasksNotDone(){
    return this.taskService.getTasksNotDone();
  }
}
