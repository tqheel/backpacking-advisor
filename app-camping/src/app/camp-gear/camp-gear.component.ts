import { Component } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-camp-gear',
  standalone: true,
  imports: [MatStepperModule, MatButtonModule, MatCardModule],
  templateUrl: './camp-gear.component.html',
  styleUrl: './camp-gear.component.css'
})
export class CampGearComponent {
  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/home']);
  }
}
