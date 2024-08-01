import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, Subscribable } from 'rxjs';
import { ThumbnailService } from 'src/app/services/thumbnail.service';

@Component({
  selector: 'app-thumbnail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.css']
})
export class ThumbnailComponent {
  data: any;
  cardData$!: Observable<unknown> | Subscribable<unknown> | Promise<unknown>;

  constructor(private channelAPI: ThumbnailService) { }

  ngOnInit(): void {
      this.channelAPI.thumbnailService().subscribe((response: any) => {
          console.log("response: ", response);
          this.data = response;
      })
  }
}
