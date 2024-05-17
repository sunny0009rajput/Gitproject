import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrousalpageComponent } from './crousalpage.component';

describe('CrousalpageComponent', () => {
  let component: CrousalpageComponent;
  let fixture: ComponentFixture<CrousalpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrousalpageComponent]
    });
    fixture = TestBed.createComponent(CrousalpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
