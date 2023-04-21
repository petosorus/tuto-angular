import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ingredients3Component } from './ingredients3.component';

describe('Ingredients3Component', () => {
  let component: Ingredients3Component;
  let fixture: ComponentFixture<Ingredients3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ingredients3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ingredients3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
