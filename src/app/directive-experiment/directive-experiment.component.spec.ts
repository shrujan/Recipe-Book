import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveExperimentComponent } from './directive-experiment.component';

describe('DirectiveExperimentComponent', () => {
  let component: DirectiveExperimentComponent;
  let fixture: ComponentFixture<DirectiveExperimentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectiveExperimentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveExperimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
