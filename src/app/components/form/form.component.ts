import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
   private text: string = '';
   private result: string = undefined;
   private error = { show: false, message: ''}

   constructor(private _apiService: ApiService) { }

   ngOnInit() { }

   onSubmit(event) {
      event.preventDefault();
      this.resolveError();

      if (!this.text || this.text === '') {
         this.showError("Please enter a value");
         return;
      }

      if (this.text.length < 2) {
         this.showError("Text must be at least 2 characters long");
         return;
      }

      this.result = this._apiService.reverseString(this.text);
   }

   private showError(message: string) {
      this.result = undefined;
      this.error.message = message;
      this.error.show = true;
   }

   private resolveError() {
      this.error = { show: false, message: '' }
   }
}
