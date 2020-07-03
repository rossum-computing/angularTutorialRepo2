import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatTableModule, MatButtonModule, MatCardModule} from '@angular/material/';





@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule
  ],
  exports: [
    MatCardModule,
    MatButtonModule,
    MatTableModule
  ]
})
export class SharedModule { }
