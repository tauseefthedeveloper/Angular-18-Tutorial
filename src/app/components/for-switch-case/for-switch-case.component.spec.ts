import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForSwitchCaseComponent } from './for-switch-case.component';

describe('ForSwitchCaseComponent', () => {
  let component: ForSwitchCaseComponent;
  let fixture: ComponentFixture<ForSwitchCaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForSwitchCaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForSwitchCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
