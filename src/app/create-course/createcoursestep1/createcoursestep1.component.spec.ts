import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Createcoursestep1Component } from './createcoursestep1.component';

describe('Createcoursestep1Component', () => {
  let component: Createcoursestep1Component;
  let fixture: ComponentFixture<Createcoursestep1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Createcoursestep1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Createcoursestep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
