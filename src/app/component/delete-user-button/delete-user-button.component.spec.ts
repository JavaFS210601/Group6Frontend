import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteUserButtonComponent } from './delete-user-button.component';

describe('DeleteUserButtonComponent', () => {
  let component: DeleteUserButtonComponent;
  let fixture: ComponentFixture<DeleteUserButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteUserButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteUserButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
