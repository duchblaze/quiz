import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareQuizComponent } from './software-quiz.component';

describe('SoftwareQuizComponent', () => {
  let component: SoftwareQuizComponent;
  let fixture: ComponentFixture<SoftwareQuizComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SoftwareQuizComponent]
    });
    fixture = TestBed.createComponent(SoftwareQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
