import { Routes } from '@angular/router';
import { MealPrepComponent } from './meal-prep/meal-prep.component';
import { GearPackingComponent } from './gear-packing/gear-packing.component';
import { HomeComponent } from './home/home.component';
import { PrintableChecklistComponent } from './printable-checklist/printable-checklist.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'meal-prep', component: MealPrepComponent },
  { path: 'gear-packing', component: GearPackingComponent },
  { path: 'checklist', component: PrintableChecklistComponent }
];
