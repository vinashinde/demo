import { Component, OnInit } from '@angular/core';
import { Component, Input } from '@angular/core';
import { Person } from "../person";

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {
  @Input() person : Person;

  constructor() { }
  ngOnInit() { }

}
