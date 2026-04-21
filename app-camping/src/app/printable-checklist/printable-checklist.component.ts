import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

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
  readonly categories = signal<ChecklistCategory[]>([
    {
      name: 'Sleeping Setup',
      icon: '😴',
      items: [
        { name: 'Tent (2-person max)', checked: false, details: 'Borrow from Troop — contact Mr. Woody (Quartermaster)' },
        { name: 'Sleeping bag (20–30°F rated)', checked: false, details: 'Or sleeping bag + extra blanket' },
        { name: 'Sleeping pad (foam or self-inflating)', checked: false, details: 'No pump-up air mattresses — too bulky for trailer' },
        { name: 'Small camp pillow', checked: false, details: 'Compressible camp pillow only — no full-size bed pillows' }
      ]
    },
    {
      name: 'Clothing',
      icon: '👕',
      items: [
        { name: '2–3 T-shirts or long-sleeve shirts', checked: false },
        { name: 'Pants (1 pair) + shorts (1 pair)', checked: false },
        { name: 'Pajamas / sleep clothes', checked: false, details: 'Keep separate and dry' },
        { name: 'Underwear (extra pair)', checked: false },
        { name: 'Socks (2–3 pairs)', checked: false, details: 'Wool or synthetic preferred' },
        { name: 'Sturdy, closed-toe shoes or hiking boots', checked: false, details: 'No flip-flops or open-toed shoes of any kind — ever' },
        { name: 'Fleece jacket or hoodie', checked: false },
        { name: 'Rain jacket', checked: false, details: 'Essential — NC weather changes fast!' },
        { name: 'Warm hat (beanie)', checked: false },
        { name: 'Gloves', checked: false, details: 'Mornings can be below freezing' }
      ]
    },
    {
      name: 'Camp Essentials',
      icon: '🔦',
      items: [
        { name: 'Headlamp', checked: false, details: 'Plus extra batteries' },
        { name: 'Sunscreen', checked: false },
        { name: 'Bug spray (DEET-based)', checked: false, details: 'Ticks are very active in NC in spring' },
        { name: 'Personal first aid kit', checked: false, details: 'Band-aids, moleskin, pain reliever' },
        { name: 'Pocket knife', checked: false, details: 'Totin\' Chip required for Scouts' },
        { name: 'Small day pack', checked: false, details: 'For hikes and activities' }
      ]
    },
    {
      name: 'Food & Kitchen',
      icon: '🍽️',
      items: [
        { name: 'Plate and bowl (mess kit)', checked: false, details: 'Label with your name' },
        { name: 'Fork, spoon, knife (or spork)', checked: false },
        { name: 'Cup or mug', checked: false, details: 'Insulated mug is great for hot drinks' },
        { name: 'Water bottle (reusable, 1L+)', checked: false },
        { name: 'Personal snacks', checked: false, details: 'Granola bars, trail mix, jerky — in a labeled zip-top bag' }
      ]
    },
    {
      name: 'Personal Items',
      icon: '🧴',
      items: [
        { name: 'Toothbrush and toothpaste', checked: false },
        { name: 'Hand sanitizer', checked: false },
        { name: 'Small camp towel', checked: false },
        { name: 'Tissues / toilet paper', checked: false },
        { name: 'Personal medications', checked: false, details: 'Give prescription meds to Scoutmaster' },
        { name: 'Trash bag (for your own waste)', checked: false }
      ]
    },
    {
      name: 'Scout Materials',
      icon: '📚',
      items: [
        { name: 'Scout handbook', checked: false },
        { name: 'Scout uniform (shirt & neckerchief)', checked: false, details: 'For flag ceremonies and formal activities' },
        { name: 'Totin\' Chip card (if earned)', checked: false },
        { name: 'Rank advancement materials', checked: false, details: 'If working on requirements at camp' }
      ]
    }
  ]);

  constructor(private router: Router) {}

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

  goBack(): void {
    this.router.navigate(['/home']);
  }
}
