import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrintableChecklistComponent } from './printable-checklist.component';

describe('PrintableChecklistComponent', () => {
  let component: PrintableChecklistComponent;
  let fixture: ComponentFixture<PrintableChecklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrintableChecklistComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(PrintableChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have multiple categories', () => {
    const categories = component.categories();
    expect(categories.length).toBeGreaterThan(0);
  });

  it('should have "The Big Three" category', () => {
    const categories = component.categories();
    const bigThree = categories.find(cat => cat.name === 'The Big Three');
    expect(bigThree).toBeDefined();
    expect(bigThree?.items.length).toBeGreaterThan(0);
  });

  it('should have "Hot Meals" category', () => {
    const categories = component.categories();
    const hotMeals = categories.find(cat => cat.name === 'Hot Meals');
    expect(hotMeals).toBeDefined();
  });

  it('should toggle item checked state', () => {
    const categories = component.categories();
    const initialState = categories[0].items[0].checked;
    
    component.toggleItem(0, 0);
    
    const updatedCategories = component.categories();
    expect(updatedCategories[0].items[0].checked).toBe(!initialState);
  });

  it('should reset all items to unchecked', () => {
    // First, check some items
    component.toggleItem(0, 0);
    component.toggleItem(1, 0);
    
    // Then reset
    component.resetChecklist();
    
    const categories = component.categories();
    categories.forEach(category => {
      category.items.forEach(item => {
        expect(item.checked).toBe(false);
      });
    });
  });

  it('should call window.print when print is called', () => {
    spyOn(window, 'print');
    component.print();
    expect(window.print).toHaveBeenCalled();
  });
});
