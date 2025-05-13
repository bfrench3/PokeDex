import { Injectable } from "@angular/core";
import { Observable, Observer } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class LocationService {
    getCurrentLocation(): Observable<GeolocationPosition> { //code that is standard for getting location
        return new Observable((observer: Observer<GeolocationPosition>) => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position: GeolocationPosition) => {
                        observer.next(position);
                        observer.complete();
                    }, (error: GeolocationPositionError) => {
                        observer.error(error);
                    }
                )


            } else {
                observer.error("Location services not enabled");
            }
        });
    }
}