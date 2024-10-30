import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstiloDinamicoHostComponent } from './estilo-dinamico-host.component';

describe('EstiloDinamicoHostComponent', () => {
  let component: EstiloDinamicoHostComponent;
  let fixture: ComponentFixture<EstiloDinamicoHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstiloDinamicoHostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EstiloDinamicoHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
