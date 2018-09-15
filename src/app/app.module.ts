import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { ApiService } from './services/api.service';

@NgModule({
   declarations: [
      AppComponent,
      FormComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      FormsModule,
      MaterialModule
   ],
   providers: [ApiService],
   bootstrap: [AppComponent]
})
export class AppModule { }
