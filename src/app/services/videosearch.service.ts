import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideosearchService {

  constructor(private http: HttpClient) { }
  videosearchService(){
return this.http.get('https://e-com-project-cf9a3-default-rtdb.firebaseio.com/pages/card-1.json')
  }
}
