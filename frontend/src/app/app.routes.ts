import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';

export const routes: Routes = [
  // default route
  { path: '', component: HomeComponent },
  // search route
  { path: 'search/:searchTerm', component: HomeComponent },
];
