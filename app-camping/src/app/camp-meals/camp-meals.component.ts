import { Component } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-camp-meals',
  standalone: true,
  imports: [MatStepperModule, MatButtonModule, MatCardModule],
  templateUrl: './camp-meals.component.html',
  styleUrl: './camp-meals.component.css'
})
export class CampMealsComponent {
  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/home']);
  }
}
