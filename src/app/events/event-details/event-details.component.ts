import { IEvent, ISession } from './../shared/event.model';
import { EventService } from './../shared/event.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  templateUrl: 'event-details.component.html',
  styles: [`
    .container{padding:0 20px;}
    .event-image{height:100px;}
    a {cursor:pointer}
  `]
})

export class EventDetailsComponent implements OnInit {
  event: IEvent;
  addMode: boolean;
  filterBy = 'all';
  sortBy = 'votes';

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute
   ) { }

  ngOnInit() {
    this.route.data.forEach((data) => {
      this.event = data['event'];
      this.addMode = false;
    });
  }
  // ngOnInit() {
  //   this.route.params.forEach((params: Params) => {
  //     this.event = this.eventService.getEvent(+params['id']);
  //   });
  //   // this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
  // }

  addSession() {
    this.addMode = true;
  }

  saveNewSession(session: ISession) {
    const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id)); // returns max sessions id
    session.id = nextId + 1;
    this.event.sessions.push(session);
    this.eventService.saveEvent(this.event).subscribe();
    // this.eventService.updateEvent(this.event)
    this.addMode = false;
  }

  cancelCreateNewSession() {
    this.addMode = false;
  }
}
