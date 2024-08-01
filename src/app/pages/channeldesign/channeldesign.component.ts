import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, Subscribable } from 'rxjs';
import { ChannelDesignServiceTsService } from 'src/app/services/channel-design-service.ts.service';

@Component({
    selector: 'app-channeldesign',
    standalone: true,
    templateUrl: './channeldesign.component.html',
    styleUrls: ['./channeldesign.component.css'],
    imports: [CommonModule],
})
export class ChanneldesignComponent {
    data: any;
    cardData$!: Observable<unknown> | Subscribable<unknown> | Promise<unknown>;

    constructor(private channelAPI: ChannelDesignServiceTsService) { }

    ngOnInit(): void {
        this.channelAPI.channelDesignService().subscribe(response => {
            console.log("response: ", response);
            this.data = response;
        })
    }
}


