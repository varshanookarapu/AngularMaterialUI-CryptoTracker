import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Createcoursestep2Component } from './createcoursestep2.component';

describe('Createcoursestep2Component', () => {
  let component: Createcoursestep2Component;
  let fixture: ComponentFixture<Createcoursestep2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Createcoursestep2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Createcoursestep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
