import { Routes } from '@angular/router';
import { Home } from './home';
import { Gallery } from './gallery';
import { RateUs } from './rate-us';
import { EventManagement } from './event-management';
import { CityLanding } from './city-landing';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'gallery', component: Gallery },
  { path: 'rate-us', component: RateUs },
  { path: 'services/event-management', component: EventManagement },
  { path: 'delhi', component: CityLanding, data: { city: 'delhi' } },
  { path: 'delhi-ncr', component: CityLanding, data: { city: 'delhi-ncr' } },
  { path: 'agra', component: CityLanding, data: { city: 'agra' } },
  { path: 'lucknow', component: CityLanding, data: { city: 'lucknow' } },
  { path: 'city/:city', component: CityLanding },
  { path: '**', redirectTo: '' }
];
