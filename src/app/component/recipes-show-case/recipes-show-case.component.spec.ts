import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesShowCaseComponent } from './recipes-show-case.component';

describe('RecipesShowCaseComponent', () => {
  let component: RecipesShowCaseComponent;
  let fixture: ComponentFixture<RecipesShowCaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipesShowCaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipesShowCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
