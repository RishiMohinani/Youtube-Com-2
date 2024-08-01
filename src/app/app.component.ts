import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo-2';
  urlPath: string = "";

  constructor() {
    const endPath = window.location.href.split('/').pop();
    if(endPath){
      this.urlPath = endPath
    }
  }
}
