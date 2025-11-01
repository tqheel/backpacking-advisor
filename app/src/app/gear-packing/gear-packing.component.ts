import { Component } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gear-packing',
  standalone: true,
  imports: [MatStepperModule, MatButtonModule, MatCardModule],
  templateUrl: './gear-packing.component.html',
  styleUrl: './gear-packing.component.css'
})
export class GearPackingComponent {
  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/home']);
  }
}