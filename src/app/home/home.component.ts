import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  appTitle: string = 'Angulancia';
  appDescription: string = 'Emergency room patient management';

  constructor() { }
  ngOnInit(): void {
  }
}
