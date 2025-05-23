import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StarterComponent } from './starter/starter.component';
import { TrainersComponent } from './trainers/trainers.component';
import { WordleComponent } from './wordle/wordle.component';
import { WhereamiComponent } from './whereami/whereami.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from '../auth.guard';
import { NotesComponent } from './notes/notes.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'starter', component: StarterComponent, canActivate: [AuthGuard] },
    { path: 'trainers', component: TrainersComponent, canActivate: [AuthGuard] },
    { path: 'wordle', component: WordleComponent, canActivate: [AuthGuard] },
    { path: 'whereami', component: WhereamiComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent, },
    { path: 'signup', component: SignupComponent, },
    { path: 'notes', component: NotesComponent, canActivate: [AuthGuard] },
    { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] }
];
