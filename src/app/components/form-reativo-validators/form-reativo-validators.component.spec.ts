import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormReativoValidatorsComponent } from './form-reativo-validators.component';

describe('FormReativoValidatorsComponent', () => {
  let component: FormReativoValidatorsComponent;
  let fixture: ComponentFixture<FormReativoValidatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormReativoValidatorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormReativoValidatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
