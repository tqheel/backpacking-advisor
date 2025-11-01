import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GearPackingComponent } from './gear-packing.component';

describe('GearPackingComponent', () => {
  let component: GearPackingComponent;
  let fixture: ComponentFixture<GearPackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GearPackingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GearPackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});