import { Component, OnInit, Sanitizer } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { LocationService } from '../../location.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-whereami',
  imports: [GoogleMapsModule, CommonModule],
  templateUrl: './whereami.component.html',
  styleUrl: './whereami.component.css',
  providers: [LocationService],
})

export class WhereamiComponent implements OnInit {
  location: GeolocationPosition | undefined; // get this from location.service.ts , gets users location 
  error: string | undefined;
  mapUrl: SafeResourceUrl | null = null

  //need to sanitize the url for the iframe to work
  constructor(private locationService: LocationService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.locationService.getCurrentLocation().subscribe({ //logic we are calling
      next: (pos) => {
        this.location = pos;

        const lng = pos.coords.longitude;
        const lat = pos.coords.latitude;

        const url = `https://www.google.com/maps?q=${lat},${lng}&z=15&output=embed`; //url for iframe
        this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
      },
      error: (err) => this.error = err
    });

    console.log(location);
  }
}
