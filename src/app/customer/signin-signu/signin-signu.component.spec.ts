import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninSignuComponent } from './signin-signu.component';

describe('SigninSignuComponent', () => {
  let component: SigninSignuComponent;
  let fixture: ComponentFixture<SigninSignuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SigninSignuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SigninSignuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
