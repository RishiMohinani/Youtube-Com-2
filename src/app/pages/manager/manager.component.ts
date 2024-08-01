import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, Subscribable } from 'rxjs';
import { ManagerService } from 'src/app/services/manager.service';


@Component({
  selector: 'app-manager',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent {
  data: any;
  cardData$!: Observable<unknown> | Subscribable<unknown> | Promise<unknown>;

  constructor(private channelAPI: ManagerService) { }

  ngOnInit(): void {
      this.channelAPI.managerService().subscribe((response: any) => {
          console.log("response: ", response);
          this.data = response;
      })
  }
}
