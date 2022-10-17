import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptowebComponent } from './cryptoweb.component';

describe('CryptowebComponent', () => {
  let component: CryptowebComponent;
  let fixture: ComponentFixture<CryptowebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptowebComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptowebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
