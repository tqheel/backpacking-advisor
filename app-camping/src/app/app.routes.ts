import { Routes } from '@angular/router';
import { CampMealsComponent } from './camp-meals/camp-meals.component';
import { CampGearComponent } from './camp-gear/camp-gear.component';
import { HomeComponent } from './home/home.component';
import { PrintableChecklistComponent } from './printable-checklist/printable-checklist.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'camp-meals', component: CampMealsComponent },
  { path: 'camp-gear', component: CampGearComponent },
  { path: 'checklist', component: PrintableChecklistComponent }
];
