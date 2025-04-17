import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StarterComponent } from './starter/starter.component';
export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'starter', component: StarterComponent }
];
