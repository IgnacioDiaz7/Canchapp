import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MultiVLCPage } from './multi-vlc.page';

describe('MultiVLCPage', () => {
  let component: MultiVLCPage;
  let fixture: ComponentFixture<MultiVLCPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiVLCPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
