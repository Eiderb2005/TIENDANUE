import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListatipificacionComponent } from './listatipificacion.component';

describe('ListatipificacionComponent', () => {
  let component: ListatipificacionComponent;
  let fixture: ComponentFixture<ListatipificacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListatipificacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListatipificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
