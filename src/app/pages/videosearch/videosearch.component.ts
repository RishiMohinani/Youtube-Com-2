import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, Subscribable } from 'rxjs';
import { VideosearchService } from 'src/app/services/videosearch.service';

@Component({
  selector: 'app-videosearch',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './videosearch.component.html',
  styleUrls: ['./videosearch.component.css'],
})
export class VideosearchComponent {
  data: any;
  cardData$!: Observable<unknown> | Subscribable<unknown> | Promise<unknown>;

  constructor(private channelAPI: VideosearchService) { }

  ngOnInit(): void {
      this.channelAPI.videosearchService().subscribe((response: any) => {
          console.log("response: ", response);
          this.data = response;
      })
  }
}
