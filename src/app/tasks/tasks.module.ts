import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTaskComponent } from './add-task/add-task.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskMainPageComponent } from './task-main-page/task-main-page.component';
import { TaskConfigurationComponent } from './task-configuration/task-configuration.component';
import { AlertDialogComponent } from './alert-dialog-component/alert-dialog-component.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialogModule } from '@angular/material/dialog';
import { EditAlertComponent } from './edit-alert/edit-alert.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    AddTaskComponent,
    TaskItemComponent,
    TaskListComponent,
    TaskMainPageComponent,
    TaskConfigurationComponent,
    AlertDialogComponent,
    EditAlertComponent,
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatSlideToggleModule,
    MatIconModule,
    FlexLayoutModule,
    MatDialogModule,
    

  
  ],
  exports: [TaskMainPageComponent],
})
export class TasksModule {}
