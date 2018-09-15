import { NgModule } from '@angular/core';
import {
   MatCardModule,
   MatButtonModule,
   MatDividerModule,
   MatFormFieldModule,
   MatInputModule
} from '@angular/material';

@NgModule({
  imports: [
     MatCardModule,
     MatButtonModule,
     MatDividerModule,
     MatFormFieldModule,
     MatInputModule
  ],
  exports: [
     MatCardModule,
     MatButtonModule,
     MatDividerModule,
     MatFormFieldModule,
     MatInputModule
  ]
})
export class MaterialModule { }
