import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GymEntretiempoPage } from './gym-entretiempo.page';

describe('GymEntretiempoPage', () => {
  let component: GymEntretiempoPage;
  let fixture: ComponentFixture<GymEntretiempoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GymEntretiempoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
