import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { findIndex } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'anything';

  dummyUsers = [
    { firstName: "John", lastName: "Doe" },
    { firstName: "Jane", lastName: 'Mane'},
    { firstName: "Johny", lastName: "Snow" },
    { firstName: "Bane", lastName: 'Man'},
    { firstName: "Arya", lastName: "" },
  ]


  getname{}
  
}
