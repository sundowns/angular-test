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
   private listing: ReversedString[] = [];
   private loading = { listing: true, submit: false };

   constructor(private _apiService: ApiService) { }

   ngOnInit() {
      this._apiService.loadAll();

      this._apiService.$items.subscribe((items) => {
         this.listing = items;
         setTimeout(() => {
            this.loading.listing = false;
         }, 1000);
      })
   }

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

      this.result = '';
      this.loading.submit = true;

      // this.result = this._apiService.reverseString(this.text);
      this._apiService.persistString(this.text).subscribe((data) => {
         if (data && data.reversed) {
            this.result = data.reversed;
            this.text = '';
            this.listing.push(data);
            this.loading.submit = false;
         }
      });
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
