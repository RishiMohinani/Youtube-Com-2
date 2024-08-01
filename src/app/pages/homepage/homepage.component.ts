import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  constructor(private router: Router) { }

  // Single function to handle redirection based on an identifier
  redirectToPage(pageId: number) {
    if (pageId === 1) {
      this.router.navigate(['/thumbnail']);
    } else if (pageId === 2) {
      this.router.navigate(['/podcast']);
    } else if (pageId === 3) {
      this.router.navigate(['/video']);
    } else if (pageId === 4) {
      this.router.navigate(['/channeldesign']);
    } else if (pageId === 5) {
      this.router.navigate(['/edit']);
    } else {
      this.router.navigate(['/manager']);
    }
  }
}
