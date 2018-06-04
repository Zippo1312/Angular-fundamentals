import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  template: `
    <h1>Create Event</h1>
    <hr>
    <div class="col-md-6">
      <h3>[Create form goes here]</h3>
      <br>
      <br>
      <button type="submit" class="btn btn-primary">Save</button>
      <button type="button" class="btn btn-default" (click)="cancel()" >Cancel</button>
    </div>
  `
})

export class CreateEventComponent implements OnInit {
  isDirty: boolean = true // if form not filled out
  constructor( private route:Router ) { }

  ngOnInit() { }

  cancel(){
    this.route.navigate(['/events'])
  }
}
