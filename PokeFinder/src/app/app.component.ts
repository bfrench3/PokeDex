import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { GoogleMapsModule } from '@angular/google-maps'
import { LocationService } from '../location.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})



export class AppComponent implements OnInit {
  title = 'PokeFinder';
  location: GeolocationPosition | undefined;
  error: string | undefined;


  constructor(private locationService: LocationService, public router: Router) { }

  shouldShowNavBar(): boolean {
    return !['/login', '/signup'].includes(this.router.url);
  }

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
