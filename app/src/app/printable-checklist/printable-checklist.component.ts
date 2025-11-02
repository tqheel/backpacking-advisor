import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';

interface ChecklistItem {
  name: string;
  checked: boolean;
  details?: string;
}

interface ChecklistCategory {
  name: string;
  icon: string;
  items: ChecklistItem[];
}

@Component({
  selector: 'app-printable-checklist',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule
  ],
  templateUrl: './printable-checklist.component.html',
  styleUrl: './printable-checklist.component.css'
})
export class PrintableChecklistComponent {
  protected readonly categories = signal<ChecklistCategory[]>([
    {
      name: 'The Big Three',
      icon: '🏔️',
      items: [
        { name: 'Backpack (50-65L)', checked: false, details: 'Large enough to fit sleeping bag inside' },
        { name: 'Tent (shared with buddy)', checked: false, details: 'Distribute poles, stakes, and fly' },
        { name: 'Sleeping Bag (20-30°F rated)', checked: false },
        { name: 'Sleeping Pad', checked: false, details: 'Critical for warmth' }
      ]
    },
    {
      name: 'Clothing',
      icon: '👕',
      items: [
        { name: 'Synthetic hiking shirt', checked: false, details: 'NO COTTON' },
        { name: 'Synthetic pants/shorts', checked: false },
        { name: 'Wool/synthetic socks (2 pairs)', checked: false },
        { name: 'Hiking boots/trail shoes (broken-in)', checked: false },
        { name: 'Sleep clothes (long underwear)', checked: false, details: 'Keep dry, for sleeping only' },
        { name: 'Fleece/puffy jacket', checked: false },
        { name: 'Rain jacket', checked: false },
        { name: 'Rain pants', checked: false },
        { name: 'Warm hat (beanie)', checked: false },
        { name: 'Gloves', checked: false }
      ]
    },
    {
      name: 'The 10 Essentials',
      icon: '🛠️',
      items: [
        { name: 'Headlamp + extra batteries', checked: false },
        { name: 'Sun protection (hat)', checked: false },
        { name: 'First aid kit', checked: false, details: 'Band-aids, blister care' },
        { name: 'Knife', checked: false, details: 'Totin\' Chip required' },
        { name: 'Extra food', checked: false, details: '1 extra lunch or 2 energy bars' },
        { name: 'Water bottles (2L capacity)', checked: false }
      ]
    },
    {
      name: 'Hot Meals',
      icon: '🍲',
      items: [
        { name: '1 Dinner (freeze-dried)', checked: false, details: 'Saturday night' },
        { name: '1 Breakfast (freeze-dried)', checked: false, details: 'Saturday morning' },
        { name: 'Instant oatmeal packets', checked: false, details: 'Sunday morning' }
      ]
    },
    {
      name: 'Mess Kit',
      icon: '🍴',
      items: [
        { name: 'Spork or long-handled spoon', checked: false },
        { name: 'Insulated mug', checked: false, details: 'For hot drinks and oatmeal' },
        { name: 'Bowl/plate (if sharing meal)', checked: false, details: 'Coordinate with meal buddy' }
      ]
    },
    {
      name: 'Trail Food',
      icon: '🥾',
      items: [
        { name: 'Mid-morning snack', checked: false, details: 'Granola bar, trail mix, jerky' },
        { name: 'No-cook trail lunch', checked: false, details: 'Tortillas, tuna, cheese, PB' }
      ]
    },
    {
      name: 'Personal Items',
      icon: '🧴',
      items: [
        { name: 'Toothbrush (travel size)', checked: false },
        { name: 'Toothpaste (travel size)', checked: false },
        { name: 'Hand sanitizer', checked: false },
        { name: 'Small camp towel', checked: false },
        { name: 'Personal medications', checked: false, details: 'Give to leaders' },
        { name: 'Trash compactor bag', checked: false, details: 'Waterproof liner for pack' }
      ]
    }
  ]);

  print(): void {
    window.print();
  }

  toggleItem(categoryIndex: number, itemIndex: number): void {
    const categories = this.categories();
    categories[categoryIndex].items[itemIndex].checked = 
      !categories[categoryIndex].items[itemIndex].checked;
    this.categories.set([...categories]);
  }

  resetChecklist(): void {
    const categories = this.categories().map(category => ({
      ...category,
      items: category.items.map(item => ({ ...item, checked: false }))
    }));
    this.categories.set(categories);
  }
}
