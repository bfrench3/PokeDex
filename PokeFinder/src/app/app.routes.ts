import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StarterComponent } from './starter/starter.component';
import { TrainersComponent } from './trainers/trainers.component';
import { WordleComponent } from './wordle/wordle.component';
import { WhereamiComponent } from './whereami/whereami.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'starter', component: StarterComponent },
    { path: 'trainers', component: TrainersComponent },
    { path: 'wordle', component: WordleComponent },
    { path: 'whereami', component: WhereamiComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent }
];
