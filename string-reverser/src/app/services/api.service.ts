import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
   providedIn: 'root'
})
export class ApiService {
   private endpoint: string = "https://localhost:44320/api/reverser";
   private items = new BehaviorSubject(undefined);
   public $items = this.items.asObservable();

   constructor(private http: HttpClient) { }

   public loadAll() {
      this.requestAll().subscribe((data) => {
         this.items.next(data);
      });
   }

   private requestAll() : Observable<ReversedString[]> {
      return this.http.get<ReversedString[]>(this.endpoint);
   }

   public persistString(value: string) : Observable<ReversedString> {
      return this.http.post<ReversedString>(this.endpoint, `"${value}"`,
      {
         headers: new HttpHeaders({
            'Content-Type':  'application/json'
         })
      });
   }
}
