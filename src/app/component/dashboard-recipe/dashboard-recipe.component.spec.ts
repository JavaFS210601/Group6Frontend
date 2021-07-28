import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardRecipeComponent } from './dashboard-recipe.component';

describe('DashboardRecipeComponent', () => {
  let component: DashboardRecipeComponent;
  let fixture: ComponentFixture<DashboardRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardRecipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
