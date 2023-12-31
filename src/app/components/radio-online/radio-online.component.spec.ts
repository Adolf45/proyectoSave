import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioOnlineComponent } from './radio-online.component';

describe('RadioOnlineComponent', () => {
  let component: RadioOnlineComponent;
  let fixture: ComponentFixture<RadioOnlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadioOnlineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RadioOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
