import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field'; // Importa MatFormFieldModule

import { DialogWarningDeleteComponent } from './dialog-warning-delete/dialog-warning-delete.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButton, MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    DialogWarningDeleteComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    DialogWarningDeleteComponent,
    MatFormFieldModule,
  ],
})
export class SharedModule {}
