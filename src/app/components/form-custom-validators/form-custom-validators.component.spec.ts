import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCustomValidatorsComponent } from './form-custom-validators.component';

describe('FormCustomValidatorsComponent', () => {
  let component: FormCustomValidatorsComponent;
  let fixture: ComponentFixture<FormCustomValidatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormCustomValidatorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormCustomValidatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
