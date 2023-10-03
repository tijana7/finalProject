import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialBarComponent } from './social-bar.component';

describe('SocialBarComponent', () => {
  let component: SocialBarComponent;
  let fixture: ComponentFixture<SocialBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SocialBarComponent]
    });
    fixture = TestBed.createComponent(SocialBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
