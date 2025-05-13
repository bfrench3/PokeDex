import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { GoogleMapsModule } from '@angular/google-maps'
import { LocationService } from '../location.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})



export class AppComponent implements OnInit {
  title = 'PokeFinder';
  location: GeolocationPosition | undefined;
  error: string | undefined;


  constructor(private locationService: LocationService) { }

  ngOnInit(): void {
    this.locationService.getCurrentLocation().subscribe({
      next: (position) => {
        this.location = position;
      }, error: (err) => {
        this.error = err;
      }
    })
  }
}
