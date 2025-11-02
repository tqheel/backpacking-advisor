import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { PrintableChecklistComponent } from '../printable-checklist/printable-checklist.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, MatCardModule, MatButtonModule, PrintableChecklistComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  protected readonly title = signal('Scout Backpacking Guide');
}
