import { Injectable } from '@angular/core';

@Injectable({
   providedIn: 'root'
})
export class ApiService {
   constructor() { }

   public reverseString(value: string) : string {
      //TODO: Replace with an API call
      return value.split("").reverse().join("");
   }
}
