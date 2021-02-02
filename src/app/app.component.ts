import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  template: `
  <div>
    <h1>{{appTitle}}</h1>
    <div>My first Component</div>
  </div>`
})

export class AppComponent {
  appTitle: string = 'Angulancia';
}