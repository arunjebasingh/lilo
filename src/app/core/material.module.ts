import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatNativeDateModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,} from  '@angular/material';
import { MatDatepickerModule } from  '@angular/material/datepicker';



@NgModule({
  imports: [
  CommonModule,
  MatToolbarModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatDialogModule,
  MatTableModule,
  MatMenuModule,
  MatIconModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatIconModule,
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatRadioModule,
  MatSidenavModule,
  MatExpansionModule,
  ],

  exports: [
  CommonModule,
   MatToolbarModule,
   MatButtonModule,
   MatCardModule,
   MatInputModule,
   MatDialogModule,
   MatTableModule,
   MatMenuModule,
   MatIconModule,
   MatNativeDateModule,
   MatDatepickerModule,
   MatIconModule,
   MatButtonModule,
   MatCheckboxModule,
   MatToolbarModule,
   MatCardModule,
   MatFormFieldModule,
   MatInputModule,
   MatListModule,
   MatRadioModule,
   MatSidenavModule,
   MatExpansionModule,
   ],
})
export class CustomMaterialModule { }
