import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  constructor(private http: HttpClient) { }
  managerService(){
return this.http.get('https://e-com-project-cf9a3-default-rtdb.firebaseio.com/pages/card-3.json')
  }
}
