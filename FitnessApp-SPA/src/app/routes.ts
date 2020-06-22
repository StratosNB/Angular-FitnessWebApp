import {Routes} from '@angular/router';
import { HomeComponent } from './Home/home.component';
import { BfComponent } from './bf/bf.component';
import { BmiComponent } from './bmi/bmi.component';
import { BmrComponent } from './bmr/bmr.component';

export const appRoutes: Routes = [
            {path: 'home', component: HomeComponent },
            {path: 'bf', component: BfComponent},
            {path: 'bmi', component: BmiComponent},
            {path: 'bmr', component: BmrComponent},
            {path: '**', redirectTo: 'home', pathMatch: 'full'}
];
