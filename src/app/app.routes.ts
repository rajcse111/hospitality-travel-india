import { Routes } from '@angular/router';
import { Home } from './home';
import { Gallery } from './gallery';
import { RateUs } from './rate-us';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'gallery', component: Gallery },
  { path: 'rate-us', component: RateUs },
  { path: '**', redirectTo: '' }
];
