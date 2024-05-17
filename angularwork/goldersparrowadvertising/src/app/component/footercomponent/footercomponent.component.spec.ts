import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootercomponentComponent } from './footercomponent.component';

describe('FootercomponentComponent', () => {
  let component: FootercomponentComponent;
  let fixture: ComponentFixture<FootercomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FootercomponentComponent]
    });
    fixture = TestBed.createComponent(FootercomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
