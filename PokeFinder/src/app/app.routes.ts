import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StarterComponent } from './starter/starter.component';
import { TrainersComponent } from './trainers/trainers.component';
import { WordleComponent } from './wordle/wordle.component';
export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'starter', component: StarterComponent },
    { path: 'trainers', component: TrainersComponent },
    { path: 'wordle', component: WordleComponent }
];
