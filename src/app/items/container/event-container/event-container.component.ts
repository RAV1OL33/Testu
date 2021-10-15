import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-container',
  templateUrl: './event-container.component.html',
  styleUrls: ['./event-container.component.sass']
})

export class EventContainerComponent implements OnInit {
  constructor() { }
  event_cards_list = [
    {},
  ]
  ngOnInit(): void {
  }

}
