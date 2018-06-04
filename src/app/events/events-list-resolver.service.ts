import { EventService } from './shared/event.service';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import 'rxjs/Rx';
import { map } from "rxjs/operators";

@Injectable()
export class EventsListResolverService implements Resolve<any> {

  constructor( private eventService:EventService ){}

  resolve(){
    return this.eventService.getEvents().map(events => events)
  }
}