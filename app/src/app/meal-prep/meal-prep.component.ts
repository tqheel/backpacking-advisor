import { Component } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meal-prep',
  standalone: true,
  imports: [MatStepperModule, MatButtonModule, MatCardModule],
  templateUrl: './meal-prep.component.html',
  styleUrl: './meal-prep.component.css'
})
export class MealPrepComponent {
  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/home']);
  }
}