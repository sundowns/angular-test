import { NgModule } from '@angular/core';
import {
   MatCardModule,
   MatButtonModule,
   MatDividerModule,
   MatFormFieldModule,
   MatInputModule,
   MatProgressSpinnerModule
} from '@angular/material';

@NgModule({
  imports: [
     MatCardModule,
     MatButtonModule,
     MatDividerModule,
     MatFormFieldModule,
     MatInputModule,
     MatProgressSpinnerModule
  ],
  exports: [
     MatCardModule,
     MatButtonModule,
     MatDividerModule,
     MatFormFieldModule,
     MatInputModule,
     MatProgressSpinnerModule
  ]
})
export class MaterialModule { }
