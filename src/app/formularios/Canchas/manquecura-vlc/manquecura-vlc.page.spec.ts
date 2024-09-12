import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManquecuraVLCPage } from './manquecura-vlc.page';

describe('ManquecuraVLCPage', () => {
  let component: ManquecuraVLCPage;
  let fixture: ComponentFixture<ManquecuraVLCPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ManquecuraVLCPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
