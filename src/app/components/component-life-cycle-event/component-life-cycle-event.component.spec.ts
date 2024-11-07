import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentLifeCycleEventComponent } from './component-life-cycle-event.component';

describe('ComponentLifeCycleEventComponent', () => {
  let component: ComponentLifeCycleEventComponent;
  let fixture: ComponentFixture<ComponentLifeCycleEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentLifeCycleEventComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentLifeCycleEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
