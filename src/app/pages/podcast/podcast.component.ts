import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, Subscribable } from 'rxjs';
import { PodcastService } from 'src/app/services/podcast.service';

@Component({
  selector: 'app-podcast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './podcast.component.html',
  styleUrls: ['./podcast.component.css']
})
export class PodcastComponent {
  data: any;
  cardData$!: Observable<unknown> | Subscribable<unknown> | Promise<unknown>;

  constructor(private channelAPI: PodcastService) { }

  ngOnInit(): void {
      this.channelAPI.podcastService().subscribe((response: any) => {
          console.log("response: ", response);
          this.data = response;
      })
  }
}
