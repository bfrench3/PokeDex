import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-starter',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './starter.component.html',
  styleUrls: ['./starter.component.css']
})


export class StarterComponent {
  constructor() {
    console.log('StarterComponent initialized!');
  }
  onSelect(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    console.log(`You selected: ${selectedValue}`);
  }
}
