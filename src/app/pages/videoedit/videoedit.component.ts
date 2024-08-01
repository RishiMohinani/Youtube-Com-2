import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, Subscribable } from 'rxjs';
import { VideoeditService } from 'src/app/services/videoedit.service';

@Component({
  selector: 'app-videoedit',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './videoedit.component.html',
  styleUrls: ['./videoedit.component.css']
})
export class VideoeditComponent {
  data: any;
  cardData$!: Observable<unknown> | Subscribable<unknown> | Promise<unknown>;

  constructor(private channelAPI: VideoeditService) { }

  ngOnInit(): void {
      this.channelAPI.videoeditService().subscribe((response: any) => {
          console.log("response: ", response);
          this.data = response;
      })
  }
}
