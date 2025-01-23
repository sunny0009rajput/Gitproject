import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReasoningComponent } from './reasoning.component';

describe('ReasoningComponent', () => {
  let component: ReasoningComponent;
  let fixture: ComponentFixture<ReasoningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReasoningComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReasoningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
