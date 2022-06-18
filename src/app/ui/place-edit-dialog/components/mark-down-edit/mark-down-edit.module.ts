import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms"
import { MarkDownEditComponent } from './mark-down-edit.component';



@NgModule({
  declarations: [
    MarkDownEditComponent
  ],
  exports: [
    MarkDownEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class MarkDownEditModule { }