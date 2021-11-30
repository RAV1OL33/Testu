import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserEvent} from "../../../../app.component";


@Component({
  selector: 'app-created-events-list',
  templateUrl: './created-events-list.component.html',
  styleUrls: ['./created-events-list.component.sass']
})
export class CreatedEventsListComponent implements OnInit{
  createdEvents: any[] = [];
  ngOnInit() {
    console.log(this.EventsArray)
    this.createdEvents = this.EventsArray;
  }
  @Input() TestString!: string;
  @Input() EventsArray!: any[];
  @Input() TestuArray!: any[];
  //@Input() events!: Array<UserEvent>;
  @Output() newEventCreated = new EventEmitter<{}>();


  constructor() {
    console.log(this.createdEvents)
  }
  addCreatedEvent(){
    this.createdEvents.push({name:'TESUTU EVENUTU'})
    this.newEventCreated.emit(this.createdEvents)
  }
}
